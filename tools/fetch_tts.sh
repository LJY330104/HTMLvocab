#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# 把「发音」要用的东西全部下到 tts/，之后页面就不再碰任何外网。
#
#   bash tools/fetch_tts.sh          # 下载 + 把库里三个外链改成本地路径
#
# 换音色：先改 index.html 里的 TTS_VOICE，再重跑这个脚本（旧模型留着也不碍事）。
# 国内网络默认走 hf-mirror.com；想直连 HuggingFace 就 HF_BASE=https://huggingface.co
# ---------------------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")/.."

HF="${HF_BASE:-https://hf-mirror.com}"
JSD="https://cdn.jsdelivr.net/npm"
VITS="@diffusionstudio/vits-web@1.0.3"
PIPER="@diffusionstudio/piper-wasm@1.0.0"
ORT="onnxruntime-web@1.18.0"

VOICE="$(grep -o "TTS_VOICE = '[^']*'" index.html | head -1 | sed "s/.*= '\(.*\)'/\1/")"
if [ -z "$VOICE" ]; then echo "× 读不到 index.html 里的 TTS_VOICE"; exit 1; fi
echo "音色：$VOICE"

mkdir -p tts/ort tts/piper tts/models

dl() {   # dl <url> <目标文件>   —— 断点续传 + 失败重试，国内网络下 63MB 也能慢慢下完
  if [ -s "$2" ]; then printf '  = 已有   %s\n' "$2"; return; fi
  printf '  ↓ %s\n' "$2"
  local i=0 total
  while :; do
    i=$((i+1))
    if curl -fsSL -C - --retry 2 --retry-delay 2 --retry-all-errors -o "$2.part" "$1"; then break; fi
    # 已经下完但服务端拒绝 Range 请求（416）时也会走到这里，比对一下大小
    total="$(curl -fsSIL -m 20 "$1" 2>/dev/null | tr -d '\r' | awk 'tolower($1)=="content-length:"{v=$2} END{print v}')"
    if [ -n "$total" ] && [ -f "$2.part" ] && [ "$(wc -c <"$2.part" | tr -d ' ')" = "$total" ]; then break; fi
    if [ "$i" -ge 6 ]; then echo "× 下载失败：$1"; exit 1; fi
    echo "    重试 $i…"; sleep 3
  done
  mv "$2.part" "$2"
  printf '    %s\n' "$(du -h "$2" | cut -f1)"
}

echo "→ 引擎 JS（vits-web + 音素化 + onnxruntime）"
dl "$JSD/$VITS/dist/vits-web.js" tts/vits-web.js
CHUNK="$(grep -o '\./piper-[A-Za-z0-9_-]*\.js' tts/vits-web.js | head -1 | sed 's|^\./||')"
if [ -z "$CHUNK" ]; then echo "× tts/vits-web.js 里没找到 piper chunk"; exit 1; fi
dl "$JSD/$VITS/dist/$CHUNK" "tts/$CHUNK"
dl "$JSD/$ORT/dist/esm/ort.min.js" tts/ort.min.js

echo "→ onnxruntime 的 wasm（单线程 SIMD 用 simd，跨源隔离时才用 threaded）"
dl "$JSD/$ORT/dist/ort-wasm-simd.wasm" tts/ort/ort-wasm-simd.wasm
dl "$JSD/$ORT/dist/ort-wasm-simd-threaded.wasm" tts/ort/ort-wasm-simd-threaded.wasm

echo "→ espeak 音素数据"
dl "$JSD/$PIPER/build/piper_phonemize.wasm" tts/piper/piper_phonemize.wasm
dl "$JSD/$PIPER/build/piper_phonemize.data" tts/piper/piper_phonemize.data

echo "→ 语音模型"
REL="$(grep -o "\"$VOICE\": \"[^\"]*\"" tts/vits-web.js | head -1 | sed 's/.*: "//; s/"$//')"
if [ -z "$REL" ]; then echo "× vits-web 里没有音色 $VOICE，检查拼写"; exit 1; fi
mkdir -p "tts/models/$(dirname "$REL")"
dl "$HF/diffusionstudio/piper-voices/resolve/main/$REL" "tts/models/$REL"
dl "$HF/diffusionstudio/piper-voices/resolve/main/$REL.json" "tts/models/$REL.json"

echo "→ 把 vits-web 里的外链改成本地路径"
python3 - tts/vits-web.js <<'PY'
import sys, io
p = sys.argv[1]
s = io.open(p, encoding='utf-8').read()
guard = 'if (e.match("https://huggingface.co"))'
if 'tts/models' in s and guard not in s:
    print('  已经本地化过，跳过')
    sys.exit(0)
subs = [
    # 三个外链 → 相对模块自身的位置（子目录部署 / worker 里都能解析对）
    ('const u = "https://huggingface.co/diffusionstudio/piper-voices/resolve/main"',
     'const u = new URL("./models", import.meta.url).href'),
    ('B = "https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.18.0/"',
     'B = new URL("./ort/", import.meta.url).href'),
    ('x = "https://cdn.jsdelivr.net/npm/@diffusionstudio/piper-wasm@1.0.0/build/piper_phonemize"',
     'x = new URL("./piper/piper_phonemize", import.meta.url).href'),
    ('await import("onnxruntime-web")', 'await import("./ort.min.js")'),
    # 库里 p() 和 D() 只对 huggingface.co 的 URL 做 OPFS 读写，本地路径要放行，
    # 否则每读一次词都会重下 63MB 模型
    (guard, 'if (e)'),
]
for old, new in subs:
    if old not in s:
        sys.exit('× 补丁失败：vits-web.js 里找不到 %r（库版本变了？）' % old[:60])
    s = s.replace(old, new)
io.open(p, 'w', encoding='utf-8').write(s)
print('  本地化完成（外链 3 处 + OPFS 缓存守卫 2 处）')
PY

echo
echo "搞定。tts/ 总计 $(du -sh tts | cut -f1)"
echo "注意：ES module 不能从 file:// 加载，这份功能要起个本地服务器（或直接部署）才生效。"
