const STYLE_RULES = [
  {
    id: 'hair_round_001',
    category: 'hair',
    conditions: { faceShape: ['round'] },
    recommend: ['锁骨发', '八字刘海', '侧分刘海', '中长层次发'],
    avoid: ['厚重齐刘海', '齐下巴短发', '贴头皮直发'],
    reason: '圆脸适合增加纵向线条，发尾层次能减少脸部横向感。',
    priority: 96
  },
  {
    id: 'hair_square_001',
    category: 'hair',
    conditions: { faceShape: ['square'] },
    recommend: ['侧分长刘海', '柔和大弯', '过肩中长发', '低层次卷发'],
    avoid: ['一刀切短发', '过直中分', '下颌线齐平短发'],
    reason: '方脸适合柔化下颌线，避免让发尾停在脸部最宽位置。',
    priority: 94
  },
  {
    id: 'hair_long_001',
    category: 'hair',
    conditions: { faceShape: ['long'] },
    recommend: ['空气刘海', '法式刘海', '及肩卷发', '横向蓬松层次'],
    avoid: ['高颅顶过度拉高', '超长直发', '完全露额中分'],
    reason: '长脸需要平衡纵向比例，刘海和横向卷度会更协调。',
    priority: 93
  },
  {
    id: 'hair_diamond_001',
    category: 'hair',
    conditions: { faceShape: ['diamond', 'heart'] },
    recommend: ['八字刘海', '颧骨外侧层次', '锁骨卷', '低马尾碎发'],
    avoid: ['贴脸直发', '颧骨处外翘', '过短眉上刘海'],
    reason: '菱形和心形脸适合修饰颧骨与额角，让面部线条更连贯。',
    priority: 92
  },
  {
    id: 'hair_oval_001',
    category: 'hair',
    conditions: { faceShape: ['oval'] },
    recommend: ['锁骨发', '层次长发', '法式卷', '干净低丸子头'],
    avoid: ['过度厚重刘海', '发尾完全无层次'],
    reason: '鹅蛋脸适配度高，重点是保持发型轻盈和头肩比例。',
    priority: 85
  },
  {
    id: 'hair_low_volume_001',
    category: 'hair',
    conditions: { hairVolume: ['low', 'flat'] },
    recommend: ['低层次烫', '发根蓬松处理', '浅层次锁骨发'],
    avoid: ['黑长直贴头皮', '过重发尾', '高密度齐刘海'],
    reason: '发量偏少或贴头皮时，发根空气感比长度更重要。',
    priority: 90
  },
  {
    id: 'hair_high_volume_001',
    category: 'hair',
    conditions: { hairVolume: ['high'] },
    recommend: ['中低层次打薄', '大弧度卷发', '过肩长度'],
    avoid: ['小密卷', '超短蓬松发', '发尾堆积'],
    reason: '发量偏多适合用层次降低厚重感，避免头部比例过大。',
    priority: 86
  },
  {
    id: 'hair_curly_001',
    category: 'hair',
    conditions: { hairTexture: ['curly'] },
    recommend: ['顺纹理层次', '锁骨卷', '低层次法式卷'],
    avoid: ['强行拉直后无层次', '高层次碎发'],
    reason: '自然卷更适合顺着纹理塑形，减少毛躁感。',
    priority: 84
  },
  {
    id: 'color_cool_001',
    category: 'color',
    conditions: { skinTone: ['cool_light'] },
    recommend: ['珍珠白', '雾蓝', '冷粉', '石墨灰', '松石绿'],
    avoid: ['橘棕', '土黄', '荧光橙'],
    reason: '冷调肤色适合清透、偏冷的低饱和色，能保持肤色干净。',
    priority: 93
  },
  {
    id: 'color_warm_001',
    category: 'color',
    conditions: { skinTone: ['warm_light'] },
    recommend: ['奶油白', '杏色', '焦糖色', '番茄红', '橄榄绿'],
    avoid: ['冷灰紫', '蓝调荧光粉', '大面积银灰'],
    reason: '暖调肤色适合带一点暖度的颜色，气色会更柔和。',
    priority: 93
  },
  {
    id: 'color_yellow_001',
    category: 'color',
    conditions: { skinTone: ['yellow_light', 'yellow_medium'] },
    recommend: ['米白', '燕麦色', '雾蓝', '茶褐色', '柔粉棕'],
    avoid: ['荧光黄', '高饱和玫红', '暗沉卡其'],
    reason: '黄调肤色适合降低饱和度并保留明度，避免显疲惫。',
    priority: 95
  },
  {
    id: 'color_wheat_deep_001',
    category: 'color',
    conditions: { skinTone: ['wheat', 'deep'] },
    recommend: ['奶白', '宝石绿', '酒红', '牛仔蓝', '金属配饰'],
    avoid: ['灰浊浅紫', '低明度土色', '贴肤裸色'],
    reason: '小麦色和深肤色适合更明确的色彩对比，质感会更突出。',
    priority: 92
  },
  {
    id: 'body_a_001',
    category: 'bottom',
    conditions: { bodyType: ['a'] },
    recommend: ['高腰A字裙', '直筒裤', '微喇裤', '垂感阔腿裤'],
    avoid: ['低腰裤', '紧身浅色裤', '胯部复杂装饰'],
    reason: 'A型轮廓适合弱化胯部横向感，并用高腰线拉长比例。',
    priority: 96
  },
  {
    id: 'body_a_top_001',
    category: 'top',
    conditions: { bodyType: ['a'] },
    recommend: ['有肩线衬衫', '短款针织衫', '微廓形西装', '上浅下深组合'],
    avoid: ['过长软塌上衣', '完全贴身薄上衣'],
    reason: '上半身适当增加结构感，可以平衡下半身比例。',
    priority: 88
  },
  {
    id: 'body_v_001',
    category: 'top',
    conditions: { bodyType: ['v'] },
    recommend: ['V领衬衫', '垂感针织', '深色简洁上衣', '下装有量感搭配'],
    avoid: ['夸张垫肩', '泡泡袖', '高饱和大面积上衣'],
    reason: 'V型轮廓适合减少肩部视觉量感，把重点放到下半身。',
    priority: 92
  },
  {
    id: 'body_h_001',
    category: 'top',
    conditions: { bodyType: ['h'] },
    recommend: ['收腰衬衫', '短外套', '腰带叠穿', '斜襟上衣'],
    avoid: ['全身直筒无腰线', '超宽松上下同宽'],
    reason: 'H型轮廓需要制造腰线变化，让比例更有层次。',
    priority: 90
  },
  {
    id: 'body_x_001',
    category: 'bottom',
    conditions: { bodyType: ['x'] },
    recommend: ['高腰直筒裤', '包裹式半裙', '鱼尾裙', '垂感连衣裙'],
    avoid: ['完全遮住腰线的长上衣', '过硬大廓形套装'],
    reason: 'X型轮廓适合保留腰线优势，避免把曲线完全盖住。',
    priority: 88
  },
  {
    id: 'body_o_001',
    category: 'top',
    conditions: { bodyType: ['o'] },
    recommend: ['纵向开襟外套', 'V领上衣', '落肩衬衫', '中长马甲'],
    avoid: ['胸腹部高亮装饰', '紧身高领', '短而紧的上衣'],
    reason: 'O型轮廓适合用纵向线条和适度空间感修饰中段。',
    priority: 92
  },
  {
    id: 'shoulder_narrow_001',
    category: 'top',
    conditions: { shoulder: ['narrow', 'sloped'] },
    recommend: ['清晰肩线西装', '小垫肩外套', '正肩T恤', '肩部有结构的衬衫'],
    avoid: ['落肩过宽卫衣', '过薄软塌针织'],
    reason: '肩线清晰能让头肩比更稳定，整体更精神。',
    priority: 87
  },
  {
    id: 'shoulder_wide_001',
    category: 'top',
    conditions: { shoulder: ['wide'] },
    recommend: ['V领针织', '纵向门襟衬衫', '无垫肩西装', '深色上装'],
    avoid: ['横向一字领', '泡泡袖', '厚垫肩外套'],
    reason: '宽肩适合减少肩部横向扩张，保留利落纵向线条。',
    priority: 87
  },
  {
    id: 'height_petite_001',
    category: 'bottom',
    conditions: { heightRange: ['petite'] },
    recommend: ['九分直筒裤', '高腰短裙', '同色系下装', '尖头低跟鞋'],
    avoid: ['低腰拖地裤', '大面积横向分割', '过长宽大外套'],
    reason: '小个子更适合清晰腰线和轻量下装，避免压低重心。',
    priority: 90
  },
  {
    id: 'effect_tall_001',
    category: 'bottom',
    conditions: { effect: ['tall'] },
    recommend: ['高腰长裤', '顺色搭配', '短上衣加长下装', '竖向线条半裙'],
    avoid: ['五五分上长下短', '厚底过笨重鞋'],
    reason: '显高的关键是腰线位置和纵向连贯度。',
    priority: 88
  },
  {
    id: 'effect_slim_001',
    category: 'top',
    conditions: { effect: ['slim'] },
    recommend: ['利落V领', '纵向门襟', '深浅对比内搭', '轻薄外套叠穿'],
    avoid: ['大面积膨胀面料', '横向宽条纹'],
    reason: '显瘦需要减少横向停顿，让视线纵向移动。',
    priority: 88
  },
  {
    id: 'scene_work_001',
    category: 'top',
    conditions: { scene: ['work'] },
    recommend: ['垂感衬衫', '微廓形西装', '针织开衫', '短款马甲'],
    avoid: ['过透面料', '夸张露肤', '大面积亮片'],
    reason: '通勤穿搭需要在专业感和舒适度之间取得平衡。',
    priority: 89
  },
  {
    id: 'scene_work_shoe_001',
    category: 'shoe',
    conditions: { scene: ['work', 'interview'] },
    recommend: ['乐福鞋', '浅口单鞋', '低跟穆勒鞋', '简洁短靴'],
    avoid: ['厚重运动拖鞋', '过高细跟鞋'],
    reason: '通勤和面试鞋款应稳定、干净，并能支撑长时间行走。',
    priority: 82
  },
  {
    id: 'scene_date_001',
    category: 'top',
    conditions: { scene: ['date'] },
    recommend: ['细针织上衣', '柔软衬衫', '微露锁骨上衣', '短外套'],
    avoid: ['过硬制服感套装', '全身暗沉无层次'],
    reason: '约会场景适合柔软材质和适度露肤，氛围更亲近。',
    priority: 88
  },
  {
    id: 'scene_interview_001',
    category: 'accessory',
    conditions: { scene: ['interview'] },
    recommend: ['小号耳钉', '细腰带', '简洁手表', '硬挺托特包'],
    avoid: ['大面积Logo', '晃动夸张耳饰', '过多金属叠戴'],
    reason: '面试配饰应降低干扰，突出可靠和专业。',
    priority: 90
  },
  {
    id: 'scene_travel_001',
    category: 'shoe',
    conditions: { scene: ['travel'] },
    recommend: ['薄底德训鞋', '轻量运动鞋', '软底乐福鞋', '防滑短靴'],
    avoid: ['磨脚新鞋', '过细高跟', '难打理浅色麂皮鞋'],
    reason: '旅行优先考虑行走舒适度，再用颜色和配饰提高完成度。',
    priority: 91
  },
  {
    id: 'scene_wedding_001',
    category: 'accessory',
    conditions: { scene: ['wedding'] },
    recommend: ['珍珠耳饰', '小号手拿包', '细带凉鞋', '轻亮泽披肩'],
    avoid: ['大面积纯白礼服', '过度抢眼红色长裙', '运动鞋'],
    reason: '婚礼宾客穿搭要精致但不喧宾夺主。',
    priority: 91
  },
  {
    id: 'scene_photo_001',
    category: 'accessory',
    conditions: { scene: ['photo'] },
    recommend: ['有存在感耳饰', '小面积亮色包', '腰带', '丝巾'],
    avoid: ['全身无焦点', '细碎复杂印花叠加'],
    reason: '拍照需要明确视觉焦点，配饰能让画面更完整。',
    priority: 89
  },
  {
    id: 'style_minimal_001',
    category: 'accessory',
    conditions: { stylePreference: ['minimal', 'commute', 'elegant'] },
    recommend: ['无Logo皮带', '几何耳饰', '硬挺托特包', '细链条项链'],
    avoid: ['过多图案堆叠', '多件夸张配饰同时出现'],
    reason: '极简、通勤和优雅路线更依赖材质、比例和细节。',
    priority: 78
  },
  {
    id: 'style_sweet_001',
    category: 'bottom',
    conditions: { stylePreference: ['sweet', 'korean', 'japanese'] },
    recommend: ['A字半裙', '百褶裙', '浅色直筒牛仔裤', '针织连衣裙'],
    avoid: ['过度成熟强势套装', '全身黑且无材质变化'],
    reason: '甜美、韩系和日系路线适合轻盈轮廓和柔和色彩。',
    priority: 76
  },
  {
    id: 'style_french_001',
    category: 'top',
    conditions: { stylePreference: ['french', 'retro'] },
    recommend: ['方领上衣', '条纹针织', '短款开衫', '复古衬衫'],
    avoid: ['过度运动化套装', '没有腰线的宽大连衣裙'],
    reason: '法式和复古路线强调松弛比例、锁骨线条和腰线。',
    priority: 76
  },
  {
    id: 'style_street_001',
    category: 'shoe',
    conditions: { stylePreference: ['street', 'neutral'] },
    recommend: ['德训鞋', '板鞋', '机能短靴', '厚底乐福鞋'],
    avoid: ['过甜蝴蝶结鞋', '细跟正式高跟鞋'],
    reason: '街头和中性路线适合鞋款有力量感，但整体仍要保持比例。',
    priority: 76
  }
]

const FALLBACKS = {
  hair: {
    recommend: ['锁骨发', '自然层次', '侧分刘海'],
    avoid: ['过度厚重刘海', '完全贴头皮造型'],
    reason: '不确定脸型时，先选择可调整、好打理的中等长度和轻层次。'
  },
  color: {
    recommend: ['米白', '浅灰', '燕麦色', '雾蓝', '低饱和绿色'],
    avoid: ['大面积荧光色', '暗沉贴肤色'],
    reason: '低饱和中性色更容易和已有衣橱组合，试错成本低。'
  },
  top: {
    recommend: ['垂感衬衫', '正肩T恤', '短款针织衫'],
    avoid: ['过软塌无型上衣', '版型过紧的薄上衣'],
    reason: '上装先保证肩线和面料质感，整体会更利落。'
  },
  bottom: {
    recommend: ['高腰直筒裤', 'A字半裙', '垂感阔腿裤'],
    avoid: ['低腰裤', '过紧且无弹力下装'],
    reason: '下装优先选择清晰腰线和稳定廓形。'
  },
  shoe: {
    recommend: ['乐福鞋', '浅口单鞋', '德训鞋'],
    avoid: ['磨脚新鞋', '与场景不匹配的夸张鞋款'],
    reason: '鞋子决定场景感，也影响整套搭配的完成度。'
  },
  accessory: {
    recommend: ['小号托特包', '细腰带', '简洁耳饰'],
    avoid: ['过多配饰同时堆叠', '廉价感强的亮面大Logo'],
    reason: '配饰保持一个视觉重点即可。'
  }
}

const STYLE_KEYWORDS = {
  scene: {
    work: ['干练', '清爽'],
    date: ['柔和', '有亲和力'],
    interview: ['可靠', '专业'],
    party: ['精致', '有记忆点'],
    travel: ['轻便', '松弛'],
    wedding: ['得体', '优雅'],
    daily: ['舒适', '耐看'],
    photo: ['上镜', '有焦点']
  },
  effect: {
    tall: ['显高'],
    slim: ['修长'],
    crisp: ['利落'],
    soft: ['温柔'],
    delicate: ['精致'],
    relaxed: ['松弛']
  },
  stylePreference: {
    minimal: ['极简'],
    commute: ['通勤'],
    sweet: ['甜美'],
    french: ['法式'],
    korean: ['韩系'],
    japanese: ['日系'],
    retro: ['复古'],
    street: ['街头'],
    elegant: ['优雅'],
    neutral: ['中性']
  },
  bodyType: {
    h: ['腰线明确'],
    a: ['上轻下稳'],
    v: ['肩部收敛'],
    x: ['比例突出'],
    o: ['纵向修饰']
  }
}

const COLOR_SWATCHES = {
  '珍珠白': '#F6F2EA',
  '雾蓝': '#8EA9B7',
  '冷粉': '#D8AEBB',
  '石墨灰': '#5E6668',
  '松石绿': '#4D8B84',
  '奶油白': '#F4E7CF',
  '杏色': '#E7C9A8',
  '焦糖色': '#A66A3D',
  '番茄红': '#C94A38',
  '橄榄绿': '#657348',
  '米白': '#EFE7D8',
  '燕麦色': '#CBB99E',
  '茶褐色': '#8A6044',
  '柔粉棕': '#C89483',
  '奶白': '#F7F0E0',
  '宝石绿': '#0F6B5D',
  '酒红': '#7A2434',
  '牛仔蓝': '#426A92',
  '金属配饰': '#C8A25D',
  '浅灰': '#C9CFCC',
  '低饱和绿色': '#94A889'
}

const SCENE_OUTFITS = {
  work: {
    casual: '正肩T恤 + 高腰直筒裤 + 轻薄开衫 + 乐福鞋',
    semi: '米白衬衫 + 高腰灰色直筒裤 + 黑色乐福鞋 + 小号托特包',
    formal: '微廓形西装 + 垂感衬衫 + 九分西裤 + 低跟单鞋'
  },
  date: {
    casual: '细针织上衣 + A字半裙 + 浅口单鞋 + 小号肩背包',
    semi: '柔软衬衫 + 高腰半裙 + 低跟穆勒鞋 + 珍珠耳饰',
    formal: '收腰连衣裙 + 短外套 + 细带低跟鞋 + 小号手拿包'
  },
  interview: {
    casual: '干净衬衫 + 深色直筒裤 + 乐福鞋 + 简洁手表',
    semi: '浅色衬衫 + 微廓形西装 + 九分西裤 + 硬挺托特包',
    formal: '成套西装 + 低饱和内搭 + 低跟单鞋 + 小号耳钉'
  },
  party: {
    casual: '短款针织衫 + 高腰牛仔裤 + 亮色小包 + 乐福鞋',
    semi: '丝质衬衫 + 垂感半裙 + 细跟短靴 + 金属耳饰',
    formal: '黑色简洁连衣裙 + 亮泽披肩 + 低跟鞋 + 小号手拿包'
  },
  travel: {
    casual: '短外套 + 直筒牛仔裤 + 轻量运动鞋 + 斜挎包',
    semi: '针织开衫 + 垂感阔腿裤 + 德训鞋 + 托特包',
    formal: '轻薄风衣 + 衬衫 + 九分裤 + 软底乐福鞋'
  },
  wedding: {
    casual: '柔色针织上衣 + 垂感半裙 + 低跟鞋 + 珍珠耳饰',
    semi: '低饱和连衣裙 + 短外套 + 小号手拿包 + 细带凉鞋',
    formal: '缎面中长裙 + 轻亮泽披肩 + 低跟单鞋 + 精致耳饰'
  },
  daily: {
    casual: '正肩T恤 + 高腰直筒裤 + 德训鞋 + 轻量托特包',
    semi: '条纹针织 + A字半裙 + 乐福鞋 + 小号肩背包',
    formal: '衬衫 + 垂感西裤 + 短外套 + 浅口单鞋'
  },
  photo: {
    casual: '短上衣 + 高腰阔腿裤 + 小面积亮色包 + 德训鞋',
    semi: '方领上衣 + 高腰半裙 + 腰带 + 有存在感耳饰',
    formal: '收腰连衣裙 + 短外套 + 精致耳饰 + 低跟鞋'
  }
}

module.exports = {
  STYLE_RULES,
  FALLBACKS,
  STYLE_KEYWORDS,
  COLOR_SWATCHES,
  SCENE_OUTFITS
}
