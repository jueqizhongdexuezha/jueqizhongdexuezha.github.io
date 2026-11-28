/* ============================================================
 * vocab-mini 音素两级数据  |  data/phon2.js
 * ------------------------------------------------------------
 * 第一层：容易听错（一对对比词）→ 同一个音（同类词）→ 发音技巧
 * 第二层（折叠）：位置说明（页面自动算）+ 拼读规律
 *
 * 字段：
 *   cmp[]  { w 词, cn 中文, ipa 音标, d 差异音（点它听整词） }
 *   same[] 同类词（中文自动从词库取）
 *   tip    发音技巧；留空 = 用 data/phon.js 原句（改一句两边都认）
 *   rule   拼读规律：这个音在本词里为什么这么拼，一条一句
 *   ext    true = 词库外的词，音频在 audio/w/<词>_f|m.mp3
 *   pos    位置说明留空，由页面按音标与重音自动算
 *
 * 对比词全部取自河南南阳中考 / 高考高频词，两词差别明显。
 * ext:true 的词不在词库，音频同名放 audio/w/<词>_f.mp3 与 _m.mp3。
 * 没配到对比词或同类词时，页面会出对应空态文案，不报错。
 * ============================================================ */
window.PHON2_PARTS = window.PHON2_PARTS || [];

window.PHON2_PARTS.push({

  "version": "0.3.0",
  "label": "音素两级数据（48 条）",
  "updated": "2026-11-28"
,
  "items": {
  "iː": {
    "cmp": [
      {
        "w": "sheep",
        "cn": "绵羊",
        "ipa": "/ʃiːp/",
        "d": "iː"
      },
      {
        "w": "ship",
        "cn": "船",
        "ipa": "/ʃɪp/",
        "d": "ɪ"
      }
    ],
    "same": [],
    "tip": "",
    "rule": "ee（sheep、see）、ea（seat、each）、ie/ei（piece、receive）都是它；看见 ee 基本没例外，直接拖长。"
  },
  "i": {
    "cmp": [
      {
        "w": "many",
        "cn": "许多",
        "ipa": "/ˈmeni/",
        "d": "i",
        "ext": true
      },
      {
        "w": "mean",
        "cn": "意思是",
        "ipa": "/miːn/",
        "d": "iː",
        "ext": true
      }
    ],
    "same": [
      "memory",
      "diversity",
      "precisely"
    ],
    "tip": "",
    "rule": "词尾的 y 落在轻读那节就读它（memory、happy），-ly、-ry 结尾一律从简，别拖长。"
  },
  "ɪ": {
    "cmp": [
      {
        "w": "sit",
        "cn": "坐",
        "ipa": "/sɪt/",
        "d": "ɪ"
      },
      {
        "w": "seat",
        "cn": "座位",
        "ipa": "/siːt/",
        "d": "iː"
      }
    ],
    "same": [
      "desire",
      "inspire",
      "require"
    ],
    "tip": "",
    "rule": "i 被辅音夹住就读短（sit、ship、big）；y 在词中也常是它（system）。"
  },
  "e": {
    "cmp": [
      {
        "w": "bed",
        "cn": "床",
        "ipa": "/bed/",
        "d": "e"
      },
      {
        "w": "bad",
        "cn": "坏的",
        "ipa": "/bæd/",
        "d": "æ"
      }
    ],
    "same": [
      "bend",
      "memory",
      "inspect"
    ],
    "tip": "",
    "rule": "e 被辅音夹住、词又短，就是短 e（bed、ten、desk）；ea 也有例外读它的（head、bread）。"
  },
  "æ": {
    "cmp": [
      {
        "w": "band",
        "cn": "乐队·带子",
        "ipa": "/bænd/",
        "d": "æ"
      },
      {
        "w": "bend",
        "cn": "弯",
        "ipa": "/bend/",
        "d": "e"
      }
    ],
    "same": [
      "crash",
      "flash",
      "smash"
    ],
    "tip": "",
    "rule": "a 前后都是辅音、词又短，就读 æ（bad、map、band）；后面跟 r 就不是它了（car）。"
  },
  "ɑː": {
    "cmp": [
      {
        "w": "cart",
        "cn": "手推车",
        "ipa": "/kɑːt/",
        "d": "ɑː",
        "ext": true
      },
      {
        "w": "cut",
        "cn": "切开",
        "ipa": "/kʌt/",
        "d": "ʌ",
        "ext": true
      }
    ],
    "same": [
      "wander",
      "conflict",
      "process"
    ],
    "tip": "",
    "rule": "ar 组合（car、park）；a 在 ss/st/th 前拉长（class、fast、father）；al 在 f/m 后（half、calm）。"
  },
  "ɒ": {
    "cmp": [
      {
        "w": "shot",
        "cn": "射击",
        "ipa": "/ʃɒt/",
        "d": "ɒ",
        "ext": true
      },
      {
        "w": "short",
        "cn": "短的",
        "ipa": "/ʃɔːt/",
        "d": "ɔː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "o 被辅音夹住、词又短，读短 ɒ（hot、dog、shop）；美音这里读 ɑː，听感更开，两种都对。"
  },
  "ɔː": {
    "cmp": [
      {
        "w": "short",
        "cn": "短的",
        "ipa": "/ʃɔːt/",
        "d": "ɔː",
        "ext": true
      },
      {
        "w": "shot",
        "cn": "射击",
        "ipa": "/ʃɒt/",
        "d": "ɒ",
        "ext": true
      }
    ],
    "same": [
      "source",
      "transport"
    ],
    "tip": "",
    "rule": "or（short、sport）、au/aw（cause、draw）、al（walk、talk）、oor/our（door、four）。"
  },
  "ʌ": {
    "cmp": [
      {
        "w": "cut",
        "cn": "切开",
        "ipa": "/kʌt/",
        "d": "ʌ",
        "ext": true
      },
      {
        "w": "cart",
        "cn": "手推车",
        "ipa": "/kɑːt/",
        "d": "ɑː",
        "ext": true
      }
    ],
    "same": [
      "function"
    ],
    "tip": "",
    "rule": "u 在闭音节（sun、cut）；o 在 m/n/th/v 前（come、son、mother、love）；ou 在 country、enough 里。"
  },
  "ə": {
    "cmp": [
      {
        "w": "of",
        "cn": "的；属于",
        "ipa": "/əv/",
        "d": "ə",
        "ext": true
      },
      {
        "w": "off",
        "cn": "关掉；离开",
        "ipa": "/ɒf/",
        "d": "ɒ",
        "ext": true
      }
    ],
    "same": [
      "hire",
      "admire",
      "wander",
      "purchase"
    ],
    "tip": "",
    "rule": "凡是轻读那一节就塌成它：ad-、-jec-、-ous、-tion 前的 a，词尾 -er/-or/-a 也算。"
  },
  "ɜː": {
    "cmp": [
      {
        "w": "work",
        "cn": "工作",
        "ipa": "/wɜːk/",
        "d": "ɜː",
        "ext": true
      },
      {
        "w": "walk",
        "cn": "走路",
        "ipa": "/wɔːk/",
        "d": "ɔː",
        "ext": true
      }
    ],
    "same": [
      "nervous",
      "diversity",
      "purchase"
    ],
    "tip": "",
    "rule": "er/ir/ur 在重读音节里拖长（her、girl、turn）；w 后面的 or 也是它（work、word）。"
  },
  "uː": {
    "cmp": [
      {
        "w": "fool",
        "cn": "傻瓜",
        "ipa": "/fuːl/",
        "d": "uː",
        "ext": true
      },
      {
        "w": "full",
        "cn": "满的",
        "ipa": "/fʊl/",
        "d": "ʊ",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "oo（food、school）；u 在开音节（rule、June）；ue/ui（blue、fruit）。"
  },
  "ʊ": {
    "cmp": [
      {
        "w": "full",
        "cn": "满的",
        "ipa": "/fʊl/",
        "d": "ʊ",
        "ext": true
      },
      {
        "w": "fool",
        "cn": "傻瓜",
        "ipa": "/fuːl/",
        "d": "uː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "oo 在 k/d 前收短（book、good、foot）；ou 在 could/should/would 里。"
  },
  "aɪ": {
    "cmp": [
      {
        "w": "like",
        "cn": "喜欢",
        "ipa": "/laɪk/",
        "d": "aɪ",
        "ext": true
      },
      {
        "w": "lick",
        "cn": "舔",
        "ipa": "/lɪk/",
        "d": "ɪ",
        "ext": true
      }
    ],
    "same": [
      "hire",
      "desire",
      "inspire"
    ],
    "tip": "",
    "rule": "i 加不发音的 e（time、dime）；igh（light、right）；词尾的 y（my、try）。"
  },
  "eɪ": {
    "cmp": [
      {
        "w": "late",
        "cn": "迟到的",
        "ipa": "/leɪt/",
        "d": "eɪ",
        "ext": true
      },
      {
        "w": "let",
        "cn": "让",
        "ipa": "/let/",
        "d": "e",
        "ext": true
      }
    ],
    "same": [
      "praise",
      "indicate"
    ],
    "tip": "",
    "rule": "a 加不发音的 e（name、late）；ai/ay（rain、day）；eigh（eight）。"
  },
  "ɔɪ": {
    "cmp": [
      {
        "w": "coin",
        "cn": "硬币",
        "ipa": "/kɔɪn/",
        "d": "ɔɪ",
        "ext": true
      },
      {
        "w": "corn",
        "cn": "玉米",
        "ipa": "/kɔːn/",
        "d": "ɔː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "词中的 oi（coin、voice）；词尾的 oy（boy、enjoy）。"
  },
  "aʊ": {
    "cmp": [
      {
        "w": "cow",
        "cn": "奶牛",
        "ipa": "/kaʊ/",
        "d": "aʊ",
        "ext": true
      },
      {
        "w": "car",
        "cn": "汽车",
        "ipa": "/kɑː/",
        "d": "ɑː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "ou（house、about）；ow 在词尾或辅音前（now、down）。"
  },
  "əʊ": {
    "cmp": [
      {
        "w": "coat",
        "cn": "外套",
        "ipa": "/kəʊt/",
        "d": "əʊ",
        "ext": true
      },
      {
        "w": "caught",
        "cn": "抓住",
        "ipa": "/kɔːt/",
        "d": "ɔː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "o 加不发音的 e（home、note）；oa（boat、road）；ow（know、low）。"
  },
  "ɪə": {
    "cmp": [
      {
        "w": "here",
        "cn": "这里",
        "ipa": "/hɪə/",
        "d": "ɪə",
        "ext": true
      },
      {
        "w": "hair",
        "cn": "头发",
        "ipa": "/heə/",
        "d": "eə",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "ere（here）、ear（hear）、eer（beer）。英音两截分得清，美音多半并进 ɪr。"
  },
  "eə": {
    "cmp": [
      {
        "w": "hair",
        "cn": "头发",
        "ipa": "/heə/",
        "d": "eə",
        "ext": true
      },
      {
        "w": "here",
        "cn": "这里",
        "ipa": "/hɪə/",
        "d": "ɪə",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "are（care）、air（chair）、ear（bear）。同样英音分得清，美音带上 r。"
  },
  "ʊə": {
    "cmp": [
      {
        "w": "sure",
        "cn": "确定的",
        "ipa": "/ʃʊə/",
        "d": "ʊə",
        "ext": true
      },
      {
        "w": "shore",
        "cn": "岸",
        "ipa": "/ʃɔː/",
        "d": "ɔː",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "ure（sure、pure）、our（tour）；如今多半直接读成 ɔː，不用纠结。"
  },
  "a": {
    "cmp": [],
    "same": [
      { w: "like", ipa: "/laɪk/", cn: "喜欢", ext: true },
      { w: "cow", ipa: "/kaʊ/", cn: "奶牛", ext: true }
    ],
    "tip": "",
    "rule": "轻读的 a（about 的 a-、ago 的 a-）；重读时它才变成别的音，所以弱读别用力。"
  },
  "p": {
    "cmp": [
      {
        "w": "pig",
        "cn": "猪",
        "ipa": "/pɪɡ/",
        "d": "p"
      },
      {
        "w": "big",
        "cn": "大的",
        "ipa": "/bɪɡ/",
        "d": "b"
      }
    ],
    "same": [
      "inspire",
      "praise",
      "inspect"
    ],
    "tip": "",
    "rule": "p 单个字母就是它，pp 也一样（happy）；s 后面的 p 送气变弱（speak），听着像 b，别慌。"
  },
  "b": {
    "cmp": [
      {
        "w": "cab",
        "cn": "出租车",
        "ipa": "/kæb/",
        "d": "b"
      },
      {
        "w": "cap",
        "cn": "帽子",
        "ipa": "/kæp/",
        "d": "p"
      }
    ],
    "same": [
      "bend",
      "objective"
    ],
    "tip": "",
    "rule": "b 与 bb（rubber）；词尾 -mb 的 b 不发音（climb、comb）——拼写有它，嘴上没它。"
  },
  "t": {
    "cmp": [
      {
        "w": "ten",
        "cn": "十",
        "ipa": "/ten/",
        "d": "t"
      },
      {
        "w": "den",
        "cn": "兽窝",
        "ipa": "/den/",
        "d": "d"
      }
    ],
    "same": [
      "conflict",
      "inspect",
      "transport"
    ],
    "tip": "",
    "rule": "t 与 tt（letter）；st 后的 t 送气变弱（stop）；-tion 里的 t 其实读 ʃ。"
  },
  "d": {
    "cmp": [
      {
        "w": "dime",
        "cn": "一角硬币",
        "ipa": "/daɪm/",
        "d": "d"
      },
      {
        "w": "time",
        "cn": "时间",
        "ipa": "/taɪm/",
        "d": "t"
      }
    ],
    "same": [
      "desire",
      "admire",
      "dash"
    ],
    "tip": "",
    "rule": "d 与 dd（ladder）；-ed 接清音读 t（worked），接浊音才是 d（played）。"
  },
  "k": {
    "cmp": [
      {
        "w": "cold",
        "cn": "冷的",
        "ipa": "/kəʊld/",
        "d": "k",
        "ext": true
      },
      {
        "w": "gold",
        "cn": "金子",
        "ipa": "/ɡəʊld/",
        "d": "g",
        "ext": true
      }
    ],
    "same": [
      "require",
      "crash",
      "function"
    ],
    "tip": "",
    "rule": "k、ck、c 都可能（cap、back、school）；c 只在 e/i/y 前才变 s（city）。"
  },
  "g": {
    "cmp": [
      {
        "w": "gold",
        "cn": "金子",
        "ipa": "/ɡəʊld/",
        "d": "g",
        "ext": true
      },
      {
        "w": "cold",
        "cn": "冷的",
        "ipa": "/kəʊld/",
        "d": "k",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "g 与 gg（bigger）；gu 里的 u 不发音（guess）；词尾 -ng 读 ŋ，别把 g 蹦出来。"
  },
  "f": {
    "cmp": [
      {
        "w": "fan",
        "cn": "风扇",
        "ipa": "/fæn/",
        "d": "f",
        "ext": true
      },
      {
        "w": "van",
        "cn": "货车",
        "ipa": "/væn/",
        "d": "v",
        "ext": true
      }
    ],
    "same": [
      "flash",
      "function",
      "conflict"
    ],
    "tip": "",
    "rule": "f 与 ff（offer）；ph（phone）、gh 在词尾（laugh、enough）也是它。"
  },
  "v": {
    "cmp": [
      {
        "w": "vote",
        "cn": "投票",
        "ipa": "/vəʊt/",
        "d": "v"
      },
      {
        "w": "boat",
        "cn": "船",
        "ipa": "/bəʊt/",
        "d": "b"
      }
    ],
    "same": [
      "nervous",
      "objective",
      "diversity"
    ],
    "tip": "",
    "rule": "只有 v 这一个字母（very、vote），没有 vv 拼法；看见它牙齿必须碰嘴唇。"
  },
  "θ": {
    "cmp": [
      {
        "w": "three",
        "cn": "三",
        "ipa": "/θriː/",
        "d": "θ"
      },
      {
        "w": "sink",
        "cn": "水槽",
        "ipa": "/sɪŋk/",
        "d": "s"
      }
    ],
    "same": [],
    "tip": "",
    "rule": "实词里的 th 多半是 θ（think、three、thing）；this/that/the 这类小词才是 ð。"
  },
  "ð": {
    "cmp": [
      {
        "w": "they",
        "cn": "他们",
        "ipa": "/ðeɪ/",
        "d": "ð"
      },
      {
        "w": "day",
        "cn": "天",
        "ipa": "/deɪ/",
        "d": "d"
      }
    ],
    "same": [],
    "tip": "",
    "rule": "冠词、代词、介词、连词里的 th 几乎都读 ð（the、this、they、with）；词中的 th 也常是它（mother）。"
  },
  "s": {
    "cmp": [
      {
        "w": "sip",
        "cn": "抿一口",
        "ipa": "/sɪp/",
        "d": "s"
      },
      {
        "w": "zip",
        "cn": "拉链",
        "ipa": "/zɪp/",
        "d": "z"
      }
    ],
    "same": [
      "inspire",
      "smash",
      "source"
    ],
    "tip": "",
    "rule": "词首的 s（sun、desk）、ss（class）、c 在 e/i/y 前（city、face）。"
  },
  "z": {
    "cmp": [
      {
        "w": "rice",
        "cn": "米饭",
        "ipa": "/raɪs/",
        "d": "s"
      },
      {
        "w": "rise",
        "cn": "上升",
        "ipa": "/raɪz/",
        "d": "z"
      }
    ],
    "same": [
      "desire",
      "praise"
    ],
    "tip": "",
    "rule": "词尾或浊音后的 s 多数读 z（is、rise、days）；z 字母本身也是（zip、zoo）。"
  },
  "ʃ": {
    "cmp": [
      {
        "w": "ship",
        "cn": "船",
        "ipa": "/ʃɪp/",
        "d": "ʃ"
      },
      {
        "w": "chip",
        "cn": "薯条·芯片",
        "ipa": "/tʃɪp/",
        "d": "tʃ"
      }
    ],
    "same": [
      "crash",
      "flash",
      "smash"
    ],
    "tip": "",
    "rule": "sh（ship）；元音前的 ti/ci（nation、special）；u 前的 s（sure）。"
  },
  "ʒ": {
    "cmp": [
      {
        "w": "pleasure",
        "cn": "乐趣",
        "ipa": "/ˈpleʒə/",
        "d": "ʒ",
        "ext": true
      },
      {
        "w": "pressure",
        "cn": "压力",
        "ipa": "/ˈpreʃə/",
        "d": "ʃ",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "ure 前的 s（measure、pleasure）；元音前的 si（vision）；法语借词里常见。"
  },
  "h": {
    "cmp": [
      {
        "w": "hair",
        "cn": "头发",
        "ipa": "/heə(r)/",
        "d": "h",
        "ext": true
      },
      {
        "w": "air",
        "cn": "空气",
        "ipa": "/eə(r)/",
        "d": "eə",
        "ext": true
      },
      {
        "w": "hat",
        "cn": "帽子",
        "ipa": "/hæt/",
        "d": "h",
        "ext": true
      },
      {
        "w": "at",
        "cn": "在（某处）",
        "ipa": "/æt/",
        "d": "æ",
        "ext": true
      }
    ],
    "same": [
      "hire"
    ],
    "tip": "",
    "rule": "只有 h 一个字母（hot、hair）；hour、honest 里的 h 不发音——拼写有它，嘴上没有。"
  },
  "tʃ": {
    "cmp": [
      {
        "w": "cheap",
        "cn": "便宜的",
        "ipa": "/tʃiːp/",
        "d": "tʃ"
      },
      {
        "w": "jeep",
        "cn": "吉普车",
        "ipa": "/dʒiːp/",
        "d": "dʒ"
      }
    ],
    "same": [
      "purchase"
    ],
    "tip": "",
    "rule": "ch（chip、cheap）、tch（catch）；ure 前的 t（picture）。"
  },
  "dʒ": {
    "cmp": [
      {
        "w": "joke",
        "cn": "玩笑",
        "ipa": "/dʒəʊk/",
        "d": "dʒ",
        "ext": true
      },
      {
        "w": "choke",
        "cn": "噎住",
        "ipa": "/tʃəʊk/",
        "d": "tʃ",
        "ext": true
      }
    ],
    "same": [
      "objective"
    ],
    "tip": "",
    "rule": "j（jeep、judge）；e/i/y 前的 g（page、giant）；dg（bridge）。"
  },
  "m": {
    "cmp": [
      {
        "w": "map",
        "cn": "地图",
        "ipa": "/mæp/",
        "d": "m"
      },
      {
        "w": "nap",
        "cn": "小睡",
        "ipa": "/næp/",
        "d": "n"
      }
    ],
    "same": [
      "admire",
      "smash",
      "memory"
    ],
    "tip": "",
    "rule": "m 与 mm（summer）；词尾 -mb 的 m 照念（climb 里的 m 在）。"
  },
  "n": {
    "cmp": [
      {
        "w": "sun",
        "cn": "太阳",
        "ipa": "/sʌn/",
        "d": "n"
      },
      {
        "w": "sung",
        "cn": "sing 的过去分词",
        "ipa": "/sʌŋ/",
        "d": "ŋ"
      }
    ],
    "same": [
      "inspire",
      "wander",
      "bend"
    ],
    "tip": "",
    "rule": "n 与 nn（sunny）；n 在 k/g 前会变 ŋ（think、bank）——拼写是 n，读的是 ŋ。"
  },
  "ŋ": {
    "cmp": [
      {
        "w": "sink",
        "cn": "水槽",
        "ipa": "/sɪŋk/",
        "d": "ŋ"
      },
      {
        "w": "sin",
        "cn": "罪",
        "ipa": "/sɪn/",
        "d": "n"
      }
    ],
    "same": [
      "function"
    ],
    "tip": "",
    "rule": "ng（sing、sung）；k/g 前的 n（sink、bank）；-ing 结尾全是它，别再补一个 g。"
  },
  "l": {
    "cmp": [
      {
        "w": "light",
        "cn": "光·轻的",
        "ipa": "/laɪt/",
        "d": "l"
      },
      {
        "w": "right",
        "cn": "右·对的",
        "ipa": "/raɪt/",
        "d": "r"
      }
    ],
    "same": [
      "flash",
      "conflict",
      "precisely"
    ],
    "tip": "",
    "rule": "l 与 ll（fill）；词尾的 l 舌头要顶住别松（tell、girl），中文「了」只在开头像。"
  },
  "r": {
    "cmp": [
      {
        "w": "road",
        "cn": "路",
        "ipa": "/rəʊd/",
        "d": "r"
      },
      {
        "w": "load",
        "cn": "装载",
        "ipa": "/ləʊd/",
        "d": "l"
      }
    ],
    "same": [
      "hire",
      "desire",
      "inspire"
    ],
    "tip": "",
    "rule": "r 与 rr（carry）；英音词尾的 r 不发音（car、teacher），美音要卷起来。"
  },
  "j": {
    "cmp": [
      {
        "w": "year",
        "cn": "年",
        "ipa": "/jɪə/",
        "d": "j",
        "ext": true
      },
      {
        "w": "ear",
        "cn": "耳朵",
        "ipa": "/ɪə/",
        "d": "ɪə",
        "ext": true
      }
    ],
    "same": [],
    "tip": "",
    "rule": "词首的 y（yes、year）；few、use 开头的 u 也带它。"
  },
  "w": {
    "cmp": [
      {
        "w": "west",
        "cn": "西",
        "ipa": "/west/",
        "d": "w"
      },
      {
        "w": "vest",
        "cn": "背心",
        "ipa": "/vest/",
        "d": "v"
      }
    ],
    "same": [
      "require",
      "wander"
    ],
    "tip": "",
    "rule": "w（west、win）、wh（what、when）；qu 里的 u 其实读 w（quick）。"
  },
  "ˈ": {
    "cmp": [],
    "same": [],
    "tip": "",
    "rule": "重音砸在哪，那一节就抬高加力、元音也跟着清楚；砸错了，词就听不出。"
  },
  "ˌ": {
    "cmp": [],
    "same": [],
    "tip": "",
    "rule": "长词里第二个小声的鼓点：比旁边的弱音节重一点，比主重音轻很多。"
  }
}
});

/* ============================================================
 * SAME_TOPUP · 同类词补池（2026-11-28）
 * ------------------------------------------------------------
 * 只从「包内已有单词音频」里挑，不新增任何音频文件，
 * 让原本只有对比词、没有同类词的音素也有词可点可听。
 * 想撤掉：整段删除即可，原始条目不受影响。
 * ============================================================ */
(function(){
  if(!window.PHON2_PARTS || !window.PHON2_PARTS[0]) return;
  const IT = window.PHON2_PARTS[0].items;
  const ADD = {
    "iː": [{ w: "sheep", ipa: "/ʃiːp/", cn: "绵羊", ext: true }, { w: "seat", ipa: "/siːt/", cn: "座位", ext: true }, { w: "cheap", ipa: "/tʃiːp/", cn: "便宜的", ext: true }, { w: "mean", ipa: "/miːn/", cn: "意味着；吝啬的", ext: true }],
    "ɒ": [{ w: "shot", ipa: "/ʃɒt/", cn: "射击；一口", ext: true }],
    "uː": [{ w: "fool", ipa: "/fuːl/", cn: "傻瓜", ext: true }],
    "ʊ": [{ w: "full", ipa: "/fʊl/", cn: "满的", ext: true }],
    "ɔɪ": [{ w: "coin", ipa: "/kɔɪn/", cn: "硬币", ext: true }],
    "aʊ": [{ w: "cow", ipa: "/kaʊ/", cn: "奶牛", ext: true }],
    "əʊ": [{ w: "boat", ipa: "/bəʊt/", cn: "船", ext: true }, { w: "coat", ipa: "/kəʊt/", cn: "外套", ext: true }, { w: "load", ipa: "/ləʊd/", cn: "装载", ext: true }, { w: "road", ipa: "/rəʊd/", cn: "道路", ext: true }],
    "ɪə": [{ w: "here", ipa: "/hɪə(r)/", cn: "这里", ext: true }, { w: "ear", ipa: "/ɪə(r)/", cn: "耳朵", ext: true }],
    "eə": [{ w: "hair", ipa: "/heə(r)/", cn: "头发", ext: true }],
    "ʊə": [{ w: "sure", ipa: "/ʃʊə(r)/", cn: "确定的", ext: true }],
    "g": [{ w: "gold", ipa: "/ɡəʊld/", cn: "金子", ext: true }, { w: "big", ipa: "/bɪɡ/", cn: "大的", ext: true }, { w: "pig", ipa: "/pɪɡ/", cn: "猪", ext: true }],
    "θ": [{ w: "three", ipa: "/θriː/", cn: "三", ext: true }],
    "ð": [{ w: "they", ipa: "/ðeɪ/", cn: "他们", ext: true }],
    "ʒ": [{ w: "pleasure", ipa: "/ˈpleʒə(r)/", cn: "愉快", ext: true }],
    "j": [{ w: "year", ipa: "/jɪə(r)/", cn: "年", ext: true }],
    "h": [{ w: "hair", ipa: "/heə(r)/", cn: "头发", ext: true }, { w: "here", ipa: "/hɪə(r)/", cn: "这里", ext: true }],
    "tʃ": [{ w: "cheap", ipa: "/tʃiːp/", cn: "便宜的", ext: true }, { w: "chip", ipa: "/tʃɪp/", cn: "薯片；芯片", ext: true }, { w: "choke", ipa: "/tʃəʊk/", cn: "窒息；噎住", ext: true }],
    "dʒ": [{ w: "jeep", ipa: "/dʒiːp/", cn: "吉普车", ext: true }, { w: "joke", ipa: "/dʒəʊk/", cn: "玩笑", ext: true }],
    "ŋ": [{ w: "sung", ipa: "/sʌŋ/", cn: "sing 的过去分词", ext: true }],
    "ʌ": [{ w: "sun", ipa: "/sʌn/", cn: "太阳", ext: true }, { w: "cut", ipa: "/kʌt/", cn: "切", ext: true }, { w: "sung", ipa: "/sʌŋ/", cn: "sing 的过去分词", ext: true }]
  };
  for(const k in ADD){
    const d = IT[k]; if(!d) continue;
    d.same = Array.isArray(d.same) ? d.same : [];
    const has = w => d.same.some(x => String(typeof x === 'string' ? x : (x && x.w) || '').toLowerCase() === w.toLowerCase());
    for(const it of ADD[k]) if(!has(it.w)) d.same.push(it);
  }})();
