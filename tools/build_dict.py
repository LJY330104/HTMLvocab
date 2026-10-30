#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 ECDICT 的 ecdict.csv 转成网页可以 <script src> 直接加载的 dict/ecdict.js。

用法：
    python3 tools/build_dict.py ecdict.csv [输出路径] [--full]

--full 会额外保留英文释义 definition 列（文件体积更大）。
默认只保留做词表用得到的列：
    word  phonetic  pos  translation  tag  exchange  bnc  frq

词条一条不少（原版 77 万条），只是去掉了用不到的列。
"""
import csv, io, json, os, sys, datetime

csv.field_size_limit(10 ** 9)

KEEP = ['word', 'phonetic', 'pos', 'translation', 'tag', 'exchange', 'bnc', 'frq']
KEEP_FULL = ['word', 'phonetic', 'pos', 'translation', 'definition', 'tag', 'exchange', 'bnc', 'frq']

HEADER = """/* ============================================================
 * ECDICT 英汉词典数据（供页面「创建词库」功能离线查词）
 * ------------------------------------------------------------
 * 数据来源：ECDICT — Free English to Chinese Dictionary Database
 *           https://github.com/skywind3000/ECDICT
 * 许可证  ：MIT License, Copyright (c) 2025 Linwei
 *           完整许可文本见同目录 LICENSE-ECDICT
 *
 * 本文件是 ecdict.csv 的再排版：词条一条未删（{n} 条），
 * 仅换成「每行一条、字段用制表符分隔」的格式，方便网页按行索引；
 * 保留列：{cols}
 * 生成时间：{ts}
 *
 * 由 tools/build_dict.py 生成，别手改。
 * ============================================================ */
"""

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    full = '--full' in sys.argv
    src = args[0] if args else 'ecdict.csv'
    out = args[1] if len(args) > 1 else 'dict/ecdict.js'
    cols = KEEP_FULL if full else KEEP

    rows = []
    n = 0
    with io.open(src, encoding='utf-8', newline='') as f:
        r = csv.DictReader(f)
        for row in r:
            vals = []
            for c in cols:
                v = (row.get(c) or '').replace('\t', ' ').replace('\r', ' ').replace('\n', '\\n')
                vals.append(v)
            if not vals[0].strip():
                continue
            rows.append('\t'.join(vals))
            n += 1

    # 每条一行，行内不含真正的换行/制表符 → 页面 split/索引都安全
    body = '\n'.join(rows)
    payload = json.dumps(body, ensure_ascii=False)

    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    with io.open(out, 'w', encoding='utf-8') as f:
        f.write(HEADER.format(n=n, cols=' / '.join(cols),
                              ts=datetime.datetime.now().strftime('%Y-%m-%d')))
        f.write('window.ECDICT_TSV = %s;\n' % payload)

    size = os.path.getsize(out) / 1024 / 1024
    print('词条 %d 条 → %s（%.1f MB）' % (n, out, size))

if __name__ == '__main__':
    main()
