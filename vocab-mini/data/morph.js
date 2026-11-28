/* ============================================================
   data/morph.js —— 词素构件表（规则外置，随便加，主文件不用动）
   ------------------------------------------------------------
   这张表就是「拆词素材库」。页面运行时会读它，按类型在词首 / 词尾 /
   词内找字母串，命中的构件记进本机的词素账本（localStorage: vm.morph.v1）。
   以后想加新构件：往 items 里再塞一条就行，index.html 一个字都不用改。

   一条构件的字段（一条 = 一个对象）：
     key   必填  唯一标识，账本按它累计。同一个词根的不同写法共用一条
     kind  必填  'source' = 真词源（查得到词源书、语料）
                 'self'   = 自己造的串（成串出现但没词源依据，两栏永不合账）
     type  必填  prefix(前缀) / suffix(后缀) / root(词根) / letter(字母物象) / family(自造家族)
     forms 必填  实际去匹配的字母串数组，可以多个写法：[con, com, cor]
                 前缀看词首、后缀看词尾、词根与家族看词内；同一词可命中多个
     gloss 建议  一句人话，卡片上直接显示
     scope 可选  强制匹配位置：start / end / in / none
                 不写就按 type 推：prefix→start，suffix→end，root/family/letter→in
                 none = 只当参考资料登记，不自动匹配（歧义太大，宁可不上账）
     why   可选  scope: none 时写清为什么不自动匹配
     note  可选  备注

   匹配规则（写在 index.html 里，通用，不含任何具体构件）：
     · 长串优先；同一位置重叠时留更长的那个（quire 盖住 ire）
     · 前缀、后缀要求比词本身短；词内匹配不限位置，同一个词里重复出现也只留不重叠的
     · 一个词通常命中 2~4 个，账本各记各的
============================================================ */
window.MORPH_DATA = {
  version: '1.1.0',
  updated: '2026-11-27',

  /* 类型的中文标签，卡片上显示用（自造件一律换成「自造」，不出现「根」字） */
  types: {
    prefix: { label: '前缀' },
    suffix: { label: '后缀' },
    root:   { label: '词根' },
    letter: { label: '物象' },
    family: { label: '家族' }
  },

  /* 权重口径：只吃真实背记数据，系数放这儿，改数字就行，主文件不用动。
     seen  = 三档复习里点过的次数
     box   = 现在的复习档位（0 不认识 / 1 模糊 / 2-3 认识，越高越熟）
     wrong = 听写里打错的次数
     构件权重 = 用到它的所有词的 (seen*seen系数 + box*box系数 + wrong*wrong系数) 之和 */
  weights: { seen: 3, box: 4, wrong: 5 },

  items: [
    /* ================= 一、字母物象（rules.md 第八节） =================
       单字母物象几乎每个词都有，上账没有信号量，所以 scope: none，
       只作参考资料登记；两字母及以上的物象照常参与词内匹配。 */
    { key: 'b',  kind: 'source', type: 'letter', forms: ['b'],  gloss: '房屋（圈块儿地 o，有水源 l）', scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'd',  kind: 'source', type: 'letter', forms: ['d'],  gloss: '大门（凯旋门、金拱门）',       scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'n',  kind: 'source', type: 'letter', forms: ['n'],  gloss: '小门',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'c',  kind: 'source', type: 'letter', forms: ['c'],  gloss: '大嘴',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'f',  kind: 'source', type: 'letter', forms: ['f'],  gloss: '佛手',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'h',  kind: 'source', type: 'letter', forms: ['h'],  gloss: 'high 高处',                    scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'o',  kind: 'source', type: 'letter', forms: ['o'],  gloss: '圈块儿地',                     scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 's',  kind: 'source', type: 'letter', forms: ['s'],  gloss: '蛇',                           scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'm',  kind: 'source', type: 'letter', forms: ['m'],  gloss: '山峰',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'r',  kind: 'source', type: 'letter', forms: ['r'],  gloss: '禾苗',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'l',  kind: 'source', type: 'letter', forms: ['l'],  gloss: '棍子',                         scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'v',  kind: 'source', type: 'letter', forms: ['v'],  gloss: '剪刀手',                       scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'p',  kind: 'source', type: 'letter', forms: ['p'],  gloss: '平面／及格线',                  scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'g',  kind: 'source', type: 'letter', forms: ['g'],  gloss: '哥',                           scope: 'none', why: '单字母几乎词词都有，记账没有信号量' },
    { key: 'ar', kind: 'source', type: 'letter', forms: ['ar'], gloss: '……样的人（liar 骗子、scholar 学者）' },
    { key: 'ow', kind: 'source', type: 'letter', forms: ['ow'], gloss: '到处' },

    /* ================= 二、前缀（rules.md 第九节） ================= */
    { key: 'con',   kind: 'source', type: 'prefix', forms: ['con', 'com', 'cor', 'col'], gloss: '一起' },
    { key: 're',    kind: 'source', type: 'prefix', forms: ['re'],   gloss: '再、往回' },
    { key: 'pre',   kind: 'source', type: 'prefix', forms: ['pre'],  gloss: '在前面' },
    { key: 'pro',   kind: 'source', type: 'prefix', forms: ['pro'],  gloss: '往前' },
    { key: 'ex',    kind: 'source', type: 'prefix', forms: ['ex', 'ec', 'ef', 'e'], gloss: '出、向外' },
    { key: 'in',    kind: 'source', type: 'prefix', forms: ['in', 'im', 'il', 'ir'], gloss: '往里（也表“不”）' },
    { key: 'de',    kind: 'source', type: 'prefix', forms: ['de'],   gloss: '下来、离开' },
    { key: 'dis',   kind: 'source', type: 'prefix', forms: ['dis', 'di', 'dif'], gloss: '分开' },
    { key: 'ad',    kind: 'source', type: 'prefix', forms: ['ad', 'at', 'ap', 'ob'], gloss: '朝向、加强' },
    { key: 'sub',   kind: 'source', type: 'prefix', forms: ['sub', 'suc', 'suf', 'sup', 'sus'], gloss: '在下面' },
    { key: 'trans', kind: 'source', type: 'prefix', forms: ['trans', 'tran'], gloss: '穿过、转过去' },
    { key: 'inter', kind: 'source', type: 'prefix', forms: ['inter', 'intel'], gloss: '在……之间' },
    { key: 'auto',  kind: 'source', type: 'prefix', forms: ['auto'], gloss: '自己' },
    { key: 'sym',   kind: 'source', type: 'prefix', forms: ['sym', 'syn'], gloss: '一起' },
    { key: 'sur',   kind: 'source', type: 'prefix', forms: ['sur'],  gloss: '在上面、超出' },
    { key: 'per',   kind: 'source', type: 'prefix', forms: ['per'],  gloss: '穿过、彻底' },
    { key: 'pur',   kind: 'source', type: 'prefix', forms: ['pur'],  gloss: '向前（pro- 的古写法）', note: 'purchase 里的 pur-' },

    /* ================= 三、后缀（rules.md 第九节） ================= */
    { key: 'tion',   kind: 'source', type: 'suffix', forms: ['ation', 'ition', 'ction', 'tion', 'sion'], gloss: '名词尾：动作／结果' },
    { key: 'ity',    kind: 'source', type: 'suffix', forms: ['ity'],  gloss: '名词尾：性质' },
    { key: 'ment',   kind: 'source', type: 'suffix', forms: ['ment'], gloss: '名词尾' },
    { key: 'ive',    kind: 'source', type: 'suffix', forms: ['ive'],  gloss: '形容词尾' },
    { key: 'ous',    kind: 'source', type: 'suffix', forms: ['ous'],  gloss: '形容词尾：多……的' },
    { key: 'antent', kind: 'source', type: 'suffix', forms: ['ant', 'ent'], gloss: '形容词／名词尾' },
    { key: 'al',     kind: 'source', type: 'suffix', forms: ['al'],   gloss: '形容词尾' },
    { key: 'ly',     kind: 'source', type: 'suffix', forms: ['ly'],   gloss: '副词尾' },
    { key: 'able',   kind: 'source', type: 'suffix', forms: ['able', 'ible'], gloss: '能……的' },
    { key: 'ify',    kind: 'source', type: 'suffix', forms: ['ify'],  gloss: '使……' },
    { key: 'ure',    kind: 'source', type: 'suffix', forms: ['ure'],  gloss: '名词尾' },
    { key: 'er',     kind: 'source', type: 'suffix', forms: ['er'],   gloss: '……的人', scope: 'none', why: '不是所有 -er 都指人（wander 就不是），自动匹配会误报，留人工判断' },
    { key: 'ness',   kind: 'source', type: 'suffix', forms: ['ness'], gloss: '名词尾' },
    /* 补表：-ion、-ate 单独立一条，不再只挂在 tion 那条下面。
       tion 的最长写法会盖住前面的词根，-ion 单独一条正好接在词根后面（funct+ion、cept+ion）。 */
    { key: 'ion',    kind: 'source', type: 'suffix', forms: ['ion'], gloss: '名词尾：动作或结果',
      note: '拉丁 -io/-ionis 经法语 -ion 进英语（function、exception）' },
    { key: 'ate',    kind: 'source', type: 'suffix', forms: ['ate'], gloss: '动词尾：使……、做……',
      note: '拉丁 -atus 过去分词尾 → 英语动词 -ate（indicate、create）' },

    /* ================= 四、词根（rules.md 第九节 14 条） ================= */
    { key: 'spect', kind: 'source', type: 'root', forms: ['spect'], gloss: '看' },
    { key: 'ject',  kind: 'source', type: 'root', forms: ['ject'],  gloss: '扔' },
    { key: 'cept',  kind: 'source', type: 'root', forms: ['cept'],  gloss: '拿' },
    { key: 'tract', kind: 'source', type: 'root', forms: ['tract'], gloss: '拉' },
    { key: 'port',  kind: 'source', type: 'root', forms: ['port'],  gloss: '搬、港口' },
    { key: 'vers',  kind: 'source', type: 'root', forms: ['vers', 'vert'], gloss: '转' },
    { key: 'dic',   kind: 'source', type: 'root', forms: ['dic'],   gloss: '说' },
    { key: 'st',    kind: 'source', type: 'root', forms: ['st', 'sta', 'stit', 'sist'], gloss: '站' },
    { key: 'miss',  kind: 'source', type: 'root', forms: ['miss', 'mit'], gloss: '送' },
    { key: 'quire', kind: 'source', type: 'root', forms: ['quire'], gloss: '寻求' },
    { key: 'form',  kind: 'source', type: 'root', forms: ['form'],  gloss: '形式' },
    { key: 'tect',  kind: 'source', type: 'root', forms: ['tect'],  gloss: '盖住' },
    { key: 'cis',   kind: 'source', type: 'root', forms: ['cis'],   gloss: '切' },
    { key: 'nom',   kind: 'source', type: 'root', forms: ['nom'],   gloss: '名字' },

    /* ============ 五、词根补充（背词时碰上、查得到词源的，可继续往下加） ============ */
    { key: 'sour',  kind: 'source', type: 'root', forms: ['sour'],  gloss: '涌出、升起', note: 'source = 涌出来的源头' },
    { key: 'wand',  kind: 'source', type: 'root', forms: ['wand'],  gloss: '漫游（日耳曼老词干）' },
    { key: 'bend',  kind: 'source', type: 'root', forms: ['bend'],  gloss: '弯（古英语 bendan 绷紧）' },
    { key: 'funct', kind: 'source', type: 'root', forms: ['funct'], gloss: '履行' },
    { key: 'flict', kind: 'source', type: 'root', forms: ['flict'], gloss: '打、撞' },
    { key: 'nerv',  kind: 'source', type: 'root', forms: ['nerv'],  gloss: '神经' },
    { key: 'memor', kind: 'source', type: 'root', forms: ['memor'], gloss: '记得' },
    { key: 'prais', kind: 'source', type: 'root', forms: ['prais'], gloss: '估价（后来变成“夸”）' },
    { key: 'cess',  kind: 'source', type: 'root', forms: ['cess', 'ced'], gloss: '走、让' },
    { key: 'pend',  kind: 'source', type: 'root', forms: ['pend', 'pens'], gloss: '挂着' },
    { key: 'text',  kind: 'source', type: 'root', forms: ['text'],  gloss: '编织' },
    { key: 'vit',   kind: 'source', type: 'root', forms: ['vit', 'viv'], gloss: '生命' },
    /* 补表（本轮反查出来的三个洞，都查得到词源） */
    { key: 'spir',  kind: 'source', type: 'root', forms: ['spir', 'spira', 'spire'], gloss: '呼吸',
      note: '拉丁 spirare「呼吸」→ inspire / spirit / respiration；拼写里 spirare 缩成 spir(e)' },
    { key: 'mir',   kind: 'source', type: 'root', forms: ['mir', 'mira', 'mire'], gloss: '惊奇、望',
      note: '拉丁 mirari「惊奇」→ admire / miracle / mirror；admire = ad + mirari' },
    { key: 'chase', kind: 'source', type: 'root', forms: ['chase'], gloss: '追、抓',
      note: '拉丁 captiare → 古法语 chacier「追猎」；purchase = pur-（向前）+ chase（追着去拿）' },

    /* ================= 六、自建家族（rules.md 第九节末尾，成串出现，继续扩） =================
       这一类是我自己攒的，查不到词源依据，账本单独记在 self 栏，
       卡片上一律标「自造」，措辞里也不许出现「根」字。 */
    { key: 'ire', kind: 'self', type: 'family', forms: ['ire'], gloss: 'fire、hire 那条线上成串出现的一串' },
    { key: 'ash', kind: 'self', type: 'family', forms: ['ash'], gloss: 'crash、flash 那条线上成串出现的一串' },
    { key: 'ave', kind: 'self', type: 'family', forms: ['ave'], gloss: 'wave、cave 那条线上成串出现的一串' }
  ]
};
