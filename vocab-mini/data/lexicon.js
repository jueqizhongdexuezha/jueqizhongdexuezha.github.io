/* ============================================================
 * vocab-mini 词库分片 01  |  手写过稿词 30
 * ------------------------------------------------------------
 * 本批词全部取自你的阅读理解素材
 *（J:\专业课\软件\工作文档\99天\九十九天的英语\02每个题型的解法\…）
 * 写法照你的原笔法：字母物象 → 一行一个构件 → 用 —— 收口。
 * 这一版是给你过稿的底稿，不是定稿。打开 index.html，双击卡片就能改，
 * 改完存在本机，永远盖过这里。
 *
 * 字段说明：
 *   w      单词
 *   pos    词性
 *   cn     核心中文义
 *   ipa    音标（界面里切成一个个音素，逐个可点）
 *   syl    音节切分
 *   read   中文近音 + 场景钩子（第一眼看到的大字）
 *   struct 构件，每项 { t:片段, g:含义, k:"r"真词源 / "m"助记 / "w"我写的 }
 *   literal 字面义 → 引申义 的推导
 *   memo   收口句，目标 12–18 字，上限 20，允许自嘲吐槽
 *   etym   true = 构件全部可查证；false = 含助记/字母物象
 *   eg     例句
 *   fam    同族词，仅收录素材中实际出现过的
 * ============================================================ */
window.LEXICON_PARTS = window.LEXICON_PARTS || [];

window.LEXICON_PARTS.push({
  "version": "0.3.0",
  "label": "拆解测试词 30（源自阅读理解素材）",
  "updated": "2026-11-25",
  "words": [
    {
      "w": "hire",
      "pos": "v./n.",
      "cn": "出租；雇用",
      "ipa": "/ˈhaɪər/",
      "syl": "hi·er",
      "read": "「海尔」一口价，当场出租",
      "struct": [
        {
          "t": "h",
          "g": "high 高处",
          "k": "m"
        },
        {
          "t": "ire",
          "g": "火（fire 去掉 f）",
          "k": "m"
        }
      ],
      "literal": "高处的火更旺 → 出租",
      "memo": "高处起火，房东反倒笑了——出租",
      "etym": false,
      "eg": "They hired a car for the trip.（他们租了辆车去旅行。）",
      "fam": [
        "desire 心底 de 的火——愿望",
        "inspire 内部 in 看到火——激励",
        "admire 广告 ad 后记住的火——赞赏",
        "require 再次 re 寻求——需要"
      ]
    },
    {
      "w": "desire",
      "pos": "n./v.",
      "cn": "愿望；渴望",
      "ipa": "/dɪˈzaɪr/",
      "syl": "de·sire",
      "read": "「底-扎伊尔」压在心底的那团",
      "struct": [
        {
          "t": "de",
          "g": "向下、底下",
          "k": "m"
        },
        {
          "t": "ire",
          "g": "火",
          "k": "m"
        }
      ],
      "literal": "压在底下的那团火 → 愿望",
      "memo": "心底那点火不灭，才叫愿望",
      "etym": false,
      "eg": "Her desire for knowledge pushed her to read every day.（她对知识的渴望促使她每天读书。）",
      "fam": []
    },
    {
      "w": "inspire",
      "pos": "v.",
      "cn": "激励；启发",
      "ipa": "/ɪnˈspaɪr/",
      "syl": "in·spire",
      "read": "「因-斯拜尔」往里吹一口气",
      "struct": [
        {
          "t": "in-",
          "g": "内部",
          "k": "r"
        },
        {
          "t": "sp",
          "g": "spect 看的缩略",
          "k": "m"
        },
        {
          "t": "ire",
          "g": "火",
          "k": "m"
        }
      ],
      "literal": "内部看到那团火 → 点燃 → 激励",
      "memo": "心里先烧起一把火，人就振奋",
      "etym": false,
      "eg": "His story inspired many young people to work hard.（他的故事激励了许多年轻人努力奋斗。）",
      "fam": []
    },
    {
      "w": "admire",
      "pos": "v.",
      "cn": "赞赏；钦佩",
      "ipa": "/ədˈmaɪr/",
      "syl": "ad·mire",
      "read": "「额的-麦尔」抬头看那团火",
      "struct": [
        {
          "t": "ad",
          "g": "广告",
          "k": "m"
        },
        {
          "t": "m",
          "g": "memory 记忆",
          "k": "m"
        },
        {
          "t": "ire",
          "g": "火",
          "k": "m"
        }
      ],
      "literal": "广告之后还记住的那团火 → 赞赏",
      "memo": "广告看多了，居然也真佩服",
      "etym": false,
      "eg": "We all admire her courage in facing difficulties.（我们都钦佩她面对困难的勇气。）",
      "fam": []
    },
    {
      "w": "require",
      "pos": "v.",
      "cn": "需要；要求",
      "ipa": "/rɪˈkwaɪr/",
      "syl": "re·quire",
      "read": "「瑞-夸伊尔」反复去求",
      "struct": [
        {
          "t": "re-",
          "g": "再次，反复",
          "k": "r"
        },
        {
          "t": "quire",
          "g": "寻求",
          "k": "r"
        }
      ],
      "literal": "一直寻求 → 要求",
      "memo": "一次次地求人——这就是要求",
      "etym": true,
      "eg": "This job requires patience.（这份工作需要耐心。）",
      "fam": []
    },
    {
      "w": "crash",
      "pos": "v./n.",
      "cn": "碰撞；坠毁",
      "ipa": "/kræʃ/",
      "syl": "crash",
      "read": "「克瑞什」一声就碎了",
      "struct": [
        {
          "t": "cr",
          "g": "cry 哭的缩写",
          "k": "m"
        },
        {
          "t": "ash",
          "g": "灰烬（as + high 高处）",
          "k": "m"
        }
      ],
      "literal": "哭出来的灰烬 → 撞碎之后剩下的东西",
      "memo": "哭着（cr）碎一地——撞了",
      "etym": false,
      "eg": "The two cars crashed into each other.（两辆车撞在了一起。）",
      "fam": [
        "flash 飞翔 fl 的灰烬——闪光",
        "smash 巨蛇 s 在山峰 m 中的灰烬——打碎",
        "dash 大 da 狮子 sh——猛冲"
      ]
    },
    {
      "w": "flash",
      "pos": "v./n.",
      "cn": "闪光；闪现",
      "ipa": "/flæʃ/",
      "syl": "flash",
      "read": "「弗莱什」一闪就没",
      "struct": [
        {
          "t": "fl",
          "g": "fly 飞的缩写",
          "k": "m"
        },
        {
          "t": "ash",
          "g": "灰烬",
          "k": "m"
        }
      ],
      "literal": "飞出来的灰烬 → 一闪而过的光",
      "memo": "一飞（fl）就发亮，闪得眼疼",
      "etym": false,
      "eg": "A flash of light appeared in the dark sky.（一道闪光出现在黑暗的天空中。）",
      "fam": []
    },
    {
      "w": "smash",
      "pos": "v.",
      "cn": "打碎；猛撞",
      "ipa": "/smæʃ/",
      "syl": "smash",
      "read": "「斯麦什」砸成一堆渣",
      "struct": [
        {
          "t": "s",
          "g": "蛇",
          "k": "m"
        },
        {
          "t": "m",
          "g": "山峰",
          "k": "m"
        },
        {
          "t": "ash",
          "g": "灰烬",
          "k": "m"
        }
      ],
      "literal": "蛇在山峰上留下的一堆灰 → 被打碎",
      "memo": "巨蛇压在山峰上，碎得彻底",
      "etym": false,
      "eg": "The ball smashed the window and fell inside.（球砸碎了窗户，掉进了屋里。）",
      "fam": []
    },
    {
      "w": "dash",
      "pos": "v./n.",
      "cn": "猛冲；短跑",
      "ipa": "/dæʃ/",
      "syl": "dash",
      "read": "「大什」撒腿就跑",
      "struct": [
        {
          "t": "da",
          "g": "大",
          "k": "m"
        },
        {
          "t": "sh",
          "g": "狮（shi）",
          "k": "m"
        }
      ],
      "literal": "大狮子扑出去 → 猛冲",
      "memo": "狮子（sh）一冲就到，猛冲",
      "etym": false,
      "eg": "He dashed to the station to catch the last train.（他冲向车站去赶末班车。）",
      "fam": []
    },
    {
      "w": "source",
      "pos": "n.",
      "cn": "来源；源头",
      "ipa": "/sɔːs/",
      "syl": "source",
      "read": "「索斯」水从那儿出来",
      "struct": [
        {
          "t": "s",
          "g": "蛇",
          "k": "m"
        },
        {
          "t": "our",
          "g": "我们的",
          "k": "m"
        },
        {
          "t": "ce",
          "g": "厕所",
          "k": "m"
        }
      ],
      "literal": "蛇盘绕着我们的地方 → 那里有水源",
      "memo": "蛇绕着咱的洗手处——水源",
      "etym": false,
      "eg": "We need to find the source of the problem.（我们得找到问题的根源。）",
      "fam": []
    },
    {
      "w": "wander",
      "pos": "v.",
      "cn": "漫步；游荡",
      "ipa": "/ˈwɑːndər/",
      "syl": "wan·der",
      "read": "「万-德」绕着弯走",
      "struct": [
        {
          "t": "wan",
          "g": "同「弯」",
          "k": "m"
        },
        {
          "t": "d",
          "g": "大门（凯旋门、金拱门那类）",
          "k": "m"
        },
        {
          "t": "er",
          "g": "比较级",
          "k": "m"
        }
      ],
      "literal": "弯弯的大门，更值得过去看看 → 漫步",
      "memo": "弯弯绕绕地走，反正不赶时间",
      "etym": false,
      "eg": "We wandered through the old streets without a map.（我们没有地图，在老街上漫步。）",
      "fam": []
    },
    {
      "w": "bend",
      "pos": "v./n.",
      "cn": "弯曲；弯道",
      "ipa": "/bend/",
      "syl": "bend",
      "read": "「本德」走到头就得拐",
      "struct": [
        {
          "t": "b",
          "g": "房屋（圈块儿地 o，有水源 l）",
          "k": "m"
        },
        {
          "t": "end",
          "g": "结束，到头",
          "k": "m"
        }
      ],
      "literal": "房屋到头，直走要撞墙 → 只能弯曲",
      "memo": "走到头还想直走？撞墙啊",
      "etym": false,
      "eg": "The road bends sharply before the small bridge.（路在小桥前急转弯。）",
      "fam": []
    },
    {
      "w": "function",
      "pos": "n.",
      "cn": "功能；作用",
      "ipa": "/ˈfʌŋkʃn/",
      "syl": "func·tion",
      "read": "「放克神」这东西有神力",
      "struct": [
        {
          "t": "fun",
          "g": "有趣",
          "k": "m"
        },
        {
          "t": "c",
          "g": "月亮",
          "k": "m"
        },
        {
          "t": "tion",
          "g": "神（-tion 后缀的谐音）",
          "k": "m"
        }
      ],
      "literal": "有趣的月亮自带神力 → 功能",
      "memo": "有趣的月亮，自带一点神力",
      "etym": false,
      "eg": "The main function of the heart is to pump blood.（心脏的主要功能是泵送血液。）",
      "fam": []
    },
    {
      "w": "conflict",
      "pos": "n./v.",
      "cn": "冲突；矛盾",
      "ipa": "/ˈkɑːnflɪkt/",
      "syl": "con·flict",
      "read": "「康弗利克特」一起选就打架",
      "struct": [
        {
          "t": "con-",
          "g": "共同，一起",
          "k": "r"
        },
        {
          "t": "f",
          "g": "佛手",
          "k": "m"
        },
        {
          "t": "lict",
          "g": "lect 选择的元音互换",
          "k": "m"
        }
      ],
      "literal": "共同做选择时打架 → 冲突",
      "memo": "连佛都选不动——那就冲突吧",
      "etym": false,
      "eg": "They tried to solve the conflict through calm talk.（他们试图通过冷静交谈解决冲突。）",
      "fam": []
    },
    {
      "w": "nervous",
      "pos": "adj.",
      "cn": "紧张的；焦虑的",
      "ipa": "/ˈnɜːvəs/",
      "syl": "ner·vous",
      "read": "「呐-维斯」门里到处是耳朵",
      "struct": [
        {
          "t": "n",
          "g": "像一个小门",
          "k": "m"
        },
        {
          "t": "er",
          "g": "耳朵",
          "k": "m"
        },
        {
          "t": "vous",
          "g": "形容词后缀，充满……的",
          "k": "m"
        }
      ],
      "literal": "门里塞满耳朵 → 焦虑",
      "memo": "门里全是耳朵，能不慌吗",
      "etym": false,
      "eg": "She felt nervous before standing on the stage.（上台前她感到紧张。）",
      "fam": []
    },
    {
      "w": "memory",
      "pos": "n.",
      "cn": "记忆；回忆",
      "ipa": "/ˈmeməri/",
      "syl": "mem·o·ry",
      "read": "「麦默瑞」到处都是我",
      "struct": [
        {
          "t": "me",
          "g": "我",
          "k": "m"
        },
        {
          "t": "mo",
          "g": "me 的变形",
          "k": "m"
        },
        {
          "t": "ry",
          "g": "表示性质、范围",
          "k": "m"
        }
      ],
      "literal": "到处是「我」→ 记忆是由我挑出来的",
      "memo": "所谓记忆，就是我挑的那点事",
      "etym": false,
      "eg": "That summer left a warm memory in my mind.（那个夏天在我心里留下了温暖的记忆。）",
      "fam": []
    },
    {
      "w": "praise",
      "pos": "v./n.",
      "cn": "赞美；表扬",
      "ipa": "/preɪz/",
      "syl": "praise",
      "read": "「普瑞兹」往上抬一抬",
      "struct": [
        {
          "t": "p",
          "g": "平面、及格线",
          "k": "m"
        },
        {
          "t": "raise",
          "g": "升起",
          "k": "r"
        }
      ],
      "literal": "从及格线往上升 → 值得夸",
      "memo": "从及格线一路升上去，值得夸",
      "etym": false,
      "eg": "The teacher praised him for his careful work.（老师因他做事细心而表扬了他。）",
      "fam": []
    },
    {
      "w": "inspect",
      "pos": "v.",
      "cn": "检查；视察",
      "ipa": "/ɪnˈspekt/",
      "syl": "in·spect",
      "read": "「因-斯派克特」往里看",
      "struct": [
        {
          "t": "in-",
          "g": "在里面",
          "k": "r"
        },
        {
          "t": "spect",
          "g": "看",
          "k": "r"
        }
      ],
      "literal": "往里面看 → 检查",
      "memo": "往里看一眼，就这一下——检查",
      "etym": true,
      "eg": "Officials came to inspect the factory.（官员来检查了工厂。）",
      "fam": [
        "respect 再看一次——尊重",
        "suspect 从下面看——怀疑"
      ]
    },
    {
      "w": "exception",
      "pos": "n.",
      "cn": "例外；除外",
      "ipa": "/ɪkˈsepʃn/",
      "syl": "ex·cep·tion",
      "read": "「伊克-塞普申」挑出去的那一个",
      "struct": [
        {
          "t": "ex-",
          "g": "向外",
          "k": "r"
        },
        {
          "t": "cept",
          "g": "拿",
          "k": "r"
        },
        {
          "t": "-ion",
          "g": "名词后缀",
          "k": "r"
        }
      ],
      "literal": "从整体里拿出去的那个 → 例外",
      "memo": "从整体里拎出去的那一个——例外",
      "etym": true,
      "eg": "There are few exceptions to this rule.（这条规则几乎没有例外。）",
      "fam": [
        "accept 一再拿到——接受",
        "concept 一起拿，因为共同——观念，概念"
      ]
    },
    {
      "w": "process",
      "pos": "n./v.",
      "cn": "过程；进程",
      "ipa": "/ˈprɑːses/",
      "syl": "proc·ess",
      "read": "「普若-塞斯」一步一步走",
      "struct": [
        {
          "t": "pro-",
          "g": "向前",
          "k": "r"
        },
        {
          "t": "cess",
          "g": "走",
          "k": "r"
        }
      ],
      "literal": "向前走 → 过程",
      "memo": "一直往前挪，走完就是过程",
      "etym": true,
      "eg": "The process of learning is very important.（学习的过程非常重要。）",
      "fam": [
        "recess 往回走——休息",
        "access 走向某处——接近，进入"
      ]
    },
    {
      "w": "transport",
      "pos": "v./n.",
      "cn": "运输；运送",
      "ipa": "/trænˈspɔːt/",
      "syl": "trans·port",
      "read": "「特兰斯-波特」换个港口",
      "struct": [
        {
          "t": "trans-",
          "g": "转移",
          "k": "r"
        },
        {
          "t": "port",
          "g": "港口",
          "k": "r"
        }
      ],
      "literal": "把货从一个港口转到另一个 → 运输",
      "memo": "港口之间来回搬东西——运输",
      "etym": true,
      "eg": "Goods are transported by rail.（货物靠铁路运输。）",
      "fam": [
        "transform 转移形式——变形",
        "transmit 转移信号——传输",
        "translate 转移晚了——翻译",
        "important 进入港口——进口",
        "export 出港口——出口",
        "passport 穿过港口——护照"
      ]
    },
    {
      "w": "objective",
      "pos": "adj./n.",
      "cn": "客观的；目标",
      "ipa": "/əbˈdʒektɪv/",
      "syl": "ob·jec·tive",
      "read": "「奥布-杰克提夫」冲着靶子扔",
      "struct": [
        {
          "t": "ob-",
          "g": "对着、朝向",
          "k": "r"
        },
        {
          "t": "ject",
          "g": "扔",
          "k": "r"
        },
        {
          "t": "-ive",
          "g": "形容词后缀",
          "k": "r"
        }
      ],
      "literal": "朝着目标扔 → 有靶子才叫客观",
      "memo": "朝着扔出去的目标，最实在",
      "etym": true,
      "eg": "Try to stay objective about it.（尽量对此保持客观。）",
      "fam": [
        "reject 往回扔——拒绝",
        "project 往前扔——项目，投射",
        "subject 扔到底下——主题，被试"
      ]
    },
    {
      "w": "indicate",
      "pos": "v.",
      "cn": "指示；表明",
      "ipa": "/ˈɪndɪkeɪt/",
      "syl": "in·di·cate",
      "read": "「因-迪-凯特」往里说一句",
      "struct": [
        {
          "t": "in-",
          "g": "进入",
          "k": "r"
        },
        {
          "t": "dic",
          "g": "说出",
          "k": "r"
        },
        {
          "t": "-ate",
          "g": "动词后缀",
          "k": "r"
        }
      ],
      "literal": "往内部说 → 指示",
      "memo": "朝里指一下，就是在指示",
      "etym": true,
      "eg": "The results indicate a clear trend.（结果显示出明显的趋势。）",
      "fam": [
        "dictate 说出去——口述，命令",
        "predict 提前说——预测"
      ]
    },
    {
      "w": "constant",
      "pos": "adj.",
      "cn": "持续的；恒定的",
      "ipa": "/ˈkɑːnstənt/",
      "syl": "con·stant",
      "read": "「康-斯坦特」一直站着不动",
      "struct": [
        {
          "t": "con-",
          "g": "共同，一起",
          "k": "r"
        },
        {
          "t": "st",
          "g": "站、立",
          "k": "r"
        },
        {
          "t": "-ant",
          "g": "形容词后缀",
          "k": "r"
        }
      ],
      "literal": "一直站着不动 → 恒定的",
      "memo": "一直站着不走，恒定",
      "etym": true,
      "eg": "He lives in constant fear.（他一直生活在恐惧中。）",
      "fam": [
        "stand 站",
        "stable 站得住的——稳定的"
      ]
    },
    {
      "w": "independent",
      "pos": "adj.",
      "cn": "独立的；自主的",
      "ipa": "/ˌɪndɪˈpendənt/",
      "syl": "in·de·pen·dent",
      "read": "「因-迪-潘登特」不用靠谁撑着",
      "struct": [
        {
          "t": "in-",
          "g": "不",
          "k": "r"
        },
        {
          "t": "depend",
          "g": "依靠：下面 de 只有一支 pen 撑着",
          "k": "m"
        }
      ],
      "literal": "不依靠 → 独立的",
      "memo": "不靠谁，自己站着——独立的",
      "etym": false,
      "eg": "She became financially independent.（她经济上独立了。）",
      "fam": [
        "depend 靠着下面那支笔站着——依靠",
        "pending 还吊着没定——待定的"
      ]
    },
    {
      "w": "diversity",
      "pos": "n.",
      "cn": "多样性；差异",
      "ipa": "/daɪˈvɜːsəti/",
      "syl": "di·ver·si·ty",
      "read": "「戴-沃-西提」往不同方向转",
      "struct": [
        {
          "t": "di-",
          "g": "分开",
          "k": "r"
        },
        {
          "t": "vers",
          "g": "转",
          "k": "r"
        },
        {
          "t": "-ity",
          "g": "名词后缀",
          "k": "r"
        }
      ],
      "literal": "分开转 → 多样性",
      "memo": "转出好几种花样，就是多样",
      "etym": true,
      "eg": "The city has great cultural diversity.（这座城市文化很多元。）",
      "fam": [
        "reverse 往回转——颠倒",
        "universe 转成一个整体——宇宙"
      ]
    },
    {
      "w": "precisely",
      "pos": "adv.",
      "cn": "精确地；恰恰",
      "ipa": "/prɪˈsaɪsli/",
      "syl": "pre·cise·ly",
      "read": "「普瑞-赛斯利」提前切好",
      "struct": [
        {
          "t": "pre-",
          "g": "在前",
          "k": "r"
        },
        {
          "t": "cis",
          "g": "切",
          "k": "r"
        },
        {
          "t": "-ly",
          "g": "副词后缀",
          "k": "r"
        }
      ],
      "literal": "提前切好的 → 精确地",
      "memo": "提前切好，分毫不差，强迫症福音",
      "etym": true,
      "eg": "That is precisely what I mean.（那正是我的意思。）",
      "fam": [
        "decide 切到底——决定",
        "concise 一起切，步骤必须简洁——简洁的"
      ]
    },
    {
      "w": "text",
      "pos": "n./v.",
      "cn": "文本；编写",
      "ipa": "/tekst/",
      "syl": "text",
      "read": "「泰克斯特」不拆，直接认",
      "struct": [
        {
          "t": "text",
          "g": "整体拼写，不拆",
          "k": "m"
        }
      ],
      "literal": "不拆 — 直接拼，最快",
      "memo": "写的都是你还没知道的事",
      "etym": false,
      "eg": "She texted me this morning.（她今早给我发了短信。）",
      "fam": []
    },
    {
      "w": "purchase",
      "pos": "v./n.",
      "cn": "购买；采购",
      "ipa": "/ˈpɜːtʃəs/",
      "syl": "pur·chase",
      "read": "「泼-切斯」不拆，直接认",
      "struct": [
        {
          "t": "purchase",
          "g": "整体拼写，不拆",
          "k": "m"
        }
      ],
      "literal": "不拆 — 虽然长，拼写其实真简单",
      "memo": "买买买的书面版，装一下",
      "etym": false,
      "eg": "Tickets can be purchased online.（票可以在网上购买。）",
      "fam": []
    },
    {
      "w": "vital",
      "pos": "adj.",
      "cn": "重要的；致命的",
      "ipa": "/ˈvaɪtl/",
      "syl": "vi·tal",
      "read": "「外头」不拆，直接认",
      "struct": [
        {
          "t": "vital",
          "g": "整体拼写，不拆",
          "k": "m"
        }
      ],
      "literal": "不拆 — 直接拼写，是最好的",
      "memo": "换掉 important，图个高级",
      "etym": false,
      "eg": "Sleep is vital to health.（睡眠对健康至关重要。）",
      "fam": []
    }
  ]
});
