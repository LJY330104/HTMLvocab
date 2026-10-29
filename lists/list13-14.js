/* ============================================================
 * 词库注册表
 * ------------------------------------------------------------
 * 想换词库？只要按下面的格式往 VOCAB_LISTS 里加一条就行，
 * 页面会自动识别，不需要改 index.html。
 *
 * 每条词库：
 *   title : 显示名称
 *   words : [ [单词, 词性, 中文释义, 搭配/记忆点], ... ]
 *
 * 注意：本地用 file:// 打开时浏览器不允许 fetch 读取 json，
 *       所以词库用 .js 文件 + <script> 引入，这是故意的。
 * ============================================================ */

window.VOCAB_LISTS = {

  "list-01": {
    title: "SAT Word List 01（97 词）",
    words: [
      ["denote", "v.", "表示，标示；意味着", "A red flag denotes danger. 与 connote（暗含义）对举。"],
      ["anticipate", "v.", "预料，预期；预先采取行动", "比 expect 更强调提前准备；anticipate + n./doing。"],
      ["mingle", "v.", "混合，混杂；交往，交际", "mingle with guests 与人交际。"],
      ["behold", "v.", "看，注视（书面、感叹）", "过去式 beheld；lo and behold「你瞧！」"],
      ["vacancy", "n.", "空缺，职位空缺；空处；茫然", "vacant adj. 空的、空缺的；job vacancy。"],
      ["nobility", "n.", "贵族（阶层）；高尚，高贵", "noble adj. 高尚的；the nobility 贵族全体。"],
      ["constrain", "v.", "限制，约束；强迫", "constrain sb to do 迫使；feel constrained 拘束。"],
      ["profess", "v.", "声称，公开表示；以…为业", "profess to know 自称知道；profession 同源。"],
      ["enumerate", "v.", "列举，逐一说明", "e-（出）+ numer（数）→ 一个个数出来。"],
      ["infuse", "v.", "注入，灌输（品质/活力）；泡（茶）", "infuse A into B 把 A 注入 B；infusion n."],
      ["endow", "v.", "捐赠，资助；赋予（天赋）", "be endowed with 天生具有；endowment 天赋、捐助。"],
      ["proprietor", "n.", "所有者，老板", "proprietor of the shop；proprietary adj. 专有的。"],
      ["complexion", "n.", "肤色，面色；事物的性质、局面", "put a different complexion on 使局面改观。"],
      ["indebted", "adj.", "感激的，受惠的；负债的", "be indebted to sb 感激某人；debt 债务。"],
      ["imposition", "n.", "强加（之物），不合理要求；征收；蒙骗", "impose v.；impose on 把…强加于。"],
      ["forgo", "v.", "放弃，舍弃（享乐或好处）", "forgo dessert 忍住不吃；与 forego 同音近义。"],
      ["patrician", "n./adj.", "贵族（的），显贵（的）", "与 plebeian（平民的）对举。"],
      ["entrust", "v.", "委托，托付", "entrust sb with sth / entrust sth to sb。"],
      ["superintend", "v.", "监督，主管", "super-（在上）+ intend（留意）；superintendent 主管。"],
      ["pronounced", "adj.", "明显的，显著的；明确的", "a pronounced accent 明显的口音。"],
      ["peril", "n.", "危险，危难", "in peril of 处于…危险中；perilous adj."],
      ["abide", "v.", "忍受，容忍；遵守；居住", "abide by 遵守；can't abide 无法忍受。"],
      ["barbarous", "adj.", "野蛮的，残暴的；粗野的", "barbarian 野蛮人；barbaric 近义。"],
      ["fleet", "adj./n.", "快速的；舰队", "形容词义多见于书面：a fleet horse。"],
      ["divine", "adj./v.", "神的，神圣的；极好的；（动词）推测，占卜", "divine 作动词是「猜中」；divinity n. 神性。"],
      ["consul", "n.", "领事；（古罗马）执政官", "consulate 领事馆；勿与 council（议会）混。"],
      ["scorn", "n./v.", "轻蔑，鄙视", "pour scorn on 嗤笑；scornful adj."],
      ["pretension", "n.", "自称，标榜；做作，虚荣", "pretentious 自命不凡的；pretend 假装。"],
      ["veil", "n./v.", "面纱；遮蔽物；掩盖，掩饰", "draw a veil over 掩饰；veiled threat 隐晦威胁。"],
      ["confide", "v.", "吐露（秘密），倾诉；信任", "confide in sb 信任某人；confide sth to sb 吐露。"],
      ["vulgar", "adj.", "粗俗的，庸俗的；平民的", "vulgar Latin 俗拉丁语；vulgarity n."],
      ["chaste", "adj.", "贞洁的，纯洁的；朴素的（风格）", "chastity n.；chaste prose 素净的文风。"],
      ["wretched", "adj.", "悲惨的，可怜的；糟糕的", "feel wretched 很难受；wretch 可怜虫。"],
      ["ridicule", "n./v.", "嘲笑，嘲弄", "hold sb up to ridicule 使某人成笑柄。"],
      ["console", "v./n.", "安慰；控制台", "console sb 安慰某人。"],
      ["evade", "v.", "逃避，回避（责任、问题、追捕）", "evade tax 逃税；evasive 回避的。"],
      ["odious", "adj.", "可憎的，令人厌恶的", "与 odium（憎恶）同源；比 hateful 更书面。"],
      ["yoke", "n./v.", "轭；束缚，枷锁；给…上轭，结合", "under the yoke of 在…枷锁下；yoke A to B。"],
      ["dreadful", "adj.", "可怕的；糟糕的", "dread v./n. 恐惧；a dreadful mistake。"],
      ["ordain", "v.", "任命（神职）；规定，注定", "fate ordained that… 命运注定；ordinance 法令。"],
      ["ascend", "v.", "上升，攀登", "ascend the throne 登基；ascendancy 支配地位。"],
      ["accordance", "n.", "一致，符合", "几乎只用于 in accordance with 依照。"],
      ["delicacy", "n.", "精致，微妙；得体；美味佳肴", "a local delicacy 地方美食。"],
      ["pledge", "n./v.", "誓言，保证；抵押（物）；承诺", "pledge to do 保证；pledge sth as collateral 抵押。"],
      ["charter", "n./v.", "宪章，特许状；包租（船/机）", "charter a plane 包机；Magna Carta 大宪章。"],
      ["populace", "n.", "平民，大众", "比 people 更书面；populist 民粹主义者。"],
      ["tariff", "n.", "关税；价目表", "impose tariffs on 对…征关税。"],
      ["reckon", "v.", "认为，估计；计算", "reckon on 指望；reckon with 认真对待。"],
      ["commonwealth", "n.", "联邦；共和国；共同体", "the British Commonwealth 英联邦。"],
      ["emolument", "n.", "报酬，薪金（尤指职务所得）", "e-（出）+ molere（磨）→ 磨出来的钱。"],
      ["debase", "v.", "贬低，降低（价值、品质）", "de-（向下）+ base；debase the currency 使贬值。"],
      ["perplex", "v.", "使困惑，使费解", "perplexing 令人困惑的；perplexity n."],
      ["adduce", "v.", "引证，举出（证据、理由）", "adduce evidence 举证；勿与 deduce（推断）混。"],
      ["preponderate", "v.", "占优势，超过，压倒", "pre-（在前）+ ponder（重量）；preponderance n."],
      ["afflict", "v.", "折磨，使痛苦", "be afflicted with 受…折磨；affliction n."],
      ["exalt", "v.", "提升，擢升；高度赞扬；使兴奋", "exalt sb to a post；exaltation 狂喜。"],
      ["alienate", "v.", "使疏远，使离间；转让（财产）", "alienate friends 疏远朋友；alien 陌生的。"],
      ["tact", "n.", "得体，圆通；机敏，分寸感", "have tact 有分寸；tactful / tactless。"],
      ["acquit", "v.", "宣告无罪；表现（acquit oneself）", "be acquitted of 被判无罪；acquittal n."],
      ["enervate", "v.", "使衰弱，使失去活力", "e-（出）+ nerv（神经）→ 抽掉神经；反义 energize。"],
      ["commotion", "n.", "骚动，混乱", "cause a commotion 引起一阵骚动。"],
      ["accost", "v.", "上前搭话，唐突地接近", "陌生人 accost you＝过来跟你搭话。"],
      ["actuate", "v.", "驱动，促使，激励", "be actuated by 出于…动机；actuator 驱动器。"],
      ["dogma", "n.", "教条，信条", "dogmatic adj. 教条主义的。"],
      ["concurrence", "n.", "同时发生；同意，一致", "in concurrence with 与…一致；concur v."],
      ["puerile", "adj.", "幼稚的，孩子气的", "拉丁 puer（男孩）→ 儿童式的。"],
      ["wanton", "adj.", "恣意的，无节制的；放荡的；无缘无故的", "wanton destruction 无端破坏。"],
      ["haughty", "adj.", "傲慢的，高傲的", "拉丁 altus（高）→ 高看自己；haughtiness n."],
      ["functionary", "n.", "官员，公务员（含贬义，按章办事的小官僚）", "语气轻蔑；区别于中性的 officer。"],
      ["tacit", "adj.", "心照不宣的，默示的，默许的", "tacit agreement 默契；tacitly adv."],
      ["pious", "adj.", "虔诚的；（贬）伪善的", "pious fraud 伪善的骗局；piety n."],
      ["recapitulate", "v.", "概括，扼要重述", "口语缩写 recap；re-（再）+ capitulum（章）。"],
      ["hasty", "adj.", "匆忙的，仓促的；草率的", "hasty decision 草率的决定；haste n."],
      ["axiom", "n.", "公理；自明之理", "axiomatic adj. 不证自明的。"],
      ["allot", "v.", "分配，分派（份额）", "allot sth to sb；allotment 配额、小块菜地。"],
      ["attentive", "adj.", "专注的，留意的；体贴的", "attentive to detail；attend to 照料。"],
      ["convulse", "v.", "使抽搐；使剧烈震动（社会、国家）", "be convulsed with laughter 笑得前仰后合。"],
      ["frantic", "adj.", "狂乱的，发狂似的；极度焦虑的", "frantic search 疯狂的搜寻；frantically adv."],
      ["paralyze", "v.", "使瘫痪，使麻痹；使无法运作", "paralysis n.；paralyzed with fear 吓呆了。"],
      ["plea", "n.", "恳求；抗辩，辩护理由", "a plea for help 求助；plead v. 恳求、抗辩。"],
      ["matrimony", "n.", "婚姻（尤法律/宗教意义）", "matrimonial adj.；holy matrimony。"],
      ["felony", "n.", "重罪", "轻罪是 misdemeanor；felon 重罪犯。"],
      ["suspense", "n.", "悬念；焦虑，不确定的等待", "keep sb in suspense 让人悬着心。"],
      ["promulgate", "v.", "颁布，公布（法令）；传播（观念）", "promulgate a law；promulgation n."],
      ["dismember", "v.", "肢解，分割（领土、组织）", "dis-（分开）+ member（肢/成员）。"],
      ["litigate", "v.", "提起诉讼，打官司", "litigation n. 诉讼；litigious 好打官司的。"],
      ["dignify", "v.", "使有尊严，使增光；把…美其名曰", "dignify sth with the name of… 美其名曰。"],
      ["faction", "n.", "派系，小集团；内讧，派系斗争", "a splinter faction 分裂派系；factional adj."],
      ["injunction", "n.", "禁令；（法院）强制令；告诫", "take out an injunction 申请禁令；enjoin v."],
      ["oligarchy", "n.", "寡头政治，寡头统治集团", "oligo-（少数）+ archy（统治）。"],
      ["suffrage", "n.", "选举权，投票权", "universal suffrage 普选；suffragist 争取者。"],
      ["befall", "v.", "降临，发生（于某人，多指坏事）", "过去式 befell；whatever befalls us。"],
      ["stride", "v./n.", "大步走；进展，进步", "make great strides 取得巨大进展。"],
      ["etiquette", "n.", "礼节，礼仪，规矩", "business etiquette 商务礼仪。"],
      ["trample", "v.", "踩踏，践踏；蹂躏，无视（权利）", "trample on sb's rights 践踏权利。"],
      ["physiognomy", "n.", "相貌，面相；地形的形态", "physi-（自然）+ gnomy（辨识）→ 看脸识人。"],
      ["brethren", "n.", "兄弟（复数，宗教社团或古语）", "our Muslim brethren；brother 的古复数。"]
    ]
  }

};

/* ============================================================
 * 进度快照区
 * ------------------------------------------------------------
 * 页面首页的「导出进度」会生成一段
 *   window.VOCAB_PROGRESS["list-01"] = { ... };
 * 直接粘贴到本文件最末尾（就在这行注释下面）即可。
 *
 * 放在这里的好处：进度跟着词表走，改 index.html、换电脑、
 * 清浏览器记录都不影响。页面启动时会把它和浏览器里的记录
 * 合并，按每个词的更新时间取较新的那份。
 *
 * 想彻底重置：删掉下面这段快照 + 点页面上的「清空进度」。
 * ============================================================ */
