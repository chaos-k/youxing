const DIAGNOSIS_TYPES = {
  quick: {
    name: '完整诊断',
    title: '完整诊断'
  },
  hair: {
    name: '发型定位',
    title: '发型定位'
  },
  scene: {
    name: '身形版型',
    title: '身形版型建议'
  }
}

const QUESTION_BANK = [
  {
    id: 'gender',
    title: '希望按哪种性别表达来推荐？',
    options: [
      { value: 'female', label: '女性', desc: '更关注气色、曲线、精致度和场景氛围' },
      { value: 'male', label: '男性', desc: '更关注清爽度、肩颈比例、质感和精神度' },
      { value: 'neutral', label: '中性', desc: '减少性别化单品，强调干净比例和质感' }
    ]
  },
  {
    id: 'ageStage',
    title: '更接近哪个年龄或生活阶段？',
    options: [
      { value: 'age_0_3', label: '宝宝 0-3', desc: '亲肤、安全、方便照护' },
      { value: 'age_4_12', label: '儿童 4-12', desc: '耐穿、活动、校园和户外' },
      { value: 'age_13_17', label: '青少年 13-17', desc: '清爽、校园、不过度成人化' },
      { value: 'age_18_22', label: '大学生 18-22', desc: '轻松、可尝试、兼顾上课和社交' },
      { value: 'age_23_30', label: '初入职场 23-30', desc: '通勤、约会、面试和个人风格' },
      { value: 'age_31_40', label: '成熟职场 31-40', desc: '质感、专业度和稳定气场' },
      { value: 'age_41_55', label: '中年 41-55', desc: '精神、材质、比例和体面感' },
      { value: 'age_56_plus', label: '银发 56+', desc: '舒适、轻便、精神和安全感' }
    ]
  },
  {
    id: 'childScene',
    title: '本次主要给孩子用于什么场景？',
    options: [
      { value: 'kid_home', label: '居家照护' },
      { value: 'kid_school', label: '幼儿园 / 学校' },
      { value: 'kid_outdoor', label: '户外活动' },
      { value: 'kid_photo', label: '节日拍照' }
    ]
  },
  {
    id: 'childPriority',
    title: '儿童穿搭最优先考虑什么？',
    options: [
      { value: 'kid_safe', label: '亲肤安全' },
      { value: 'kid_easy', label: '方便穿脱' },
      { value: 'kid_durable', label: '耐脏耐磨' },
      { value: 'kid_warm', label: '保暖防护' }
    ]
  },
  {
    id: 'campusScene',
    title: '校园阶段更常见的使用场景是？',
    options: [
      { value: 'campus_daily', label: '日常上课' },
      { value: 'campus_club', label: '社团聚会' },
      { value: 'campus_interview', label: '实习面试' },
      { value: 'campus_date', label: '约会出行' }
    ]
  },
  {
    id: 'faceShape',
    title: '你的脸型更接近？',
    options: [
      { value: 'round', label: '圆脸' },
      { value: 'square', label: '方脸' },
      { value: 'long', label: '长脸' },
      { value: 'oval', label: '鹅蛋脸' },
      { value: 'diamond', label: '菱形脸' },
      { value: 'heart', label: '心形脸' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'neck',
    title: '颈部长度和视觉比例更接近？',
    options: [
      { value: 'short', label: '偏短' },
      { value: 'balanced', label: '适中' },
      { value: 'long', label: '偏长' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'skinTone',
    title: '肤色倾向更接近？',
    options: [
      { value: 'cool_light', label: '冷白' },
      { value: 'warm_light', label: '暖白' },
      { value: 'yellow_light', label: '黄一白' },
      { value: 'yellow_medium', label: '黄二白' },
      { value: 'wheat', label: '小麦色' },
      { value: 'deep', label: '深肤色' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'heightRange',
    title: '身高区间更接近？',
    options: [
      { value: 'petite', label: '158cm 以下' },
      { value: 'mid', label: '158-168cm' },
      { value: 'tall', label: '168cm 以上' }
    ]
  },
  {
    id: 'bodyType',
    title: '体型轮廓更接近？',
    options: [
      { value: 'h', label: 'H 型' },
      { value: 'a', label: 'A 型' },
      { value: 'v', label: 'V 型' },
      { value: 'x', label: 'X 型' },
      { value: 'o', label: 'O 型' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'shoulder',
    title: '肩线特征更接近？',
    options: [
      { value: 'narrow', label: '偏窄' },
      { value: 'balanced', label: '适中' },
      { value: 'wide', label: '偏宽' },
      { value: 'sloped', label: '溜肩' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'waist',
    title: '腰线位置和清晰度更接近？',
    options: [
      { value: 'high_clear', label: '较高且清晰' },
      { value: 'balanced', label: '适中' },
      { value: 'low_blur', label: '偏低或不明显' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'leg',
    title: '腿型修饰更关注哪一点？',
    options: [
      { value: 'straight', label: '线条顺直' },
      { value: 'calf', label: '小腿修饰' },
      { value: 'lengthen', label: '拉长比例' },
      { value: 'comfort', label: '舒适活动' }
    ]
  },
  {
    id: 'hairVolume',
    title: '发量更接近？',
    options: [
      { value: 'low', label: '偏少' },
      { value: 'medium', label: '适中' },
      { value: 'high', label: '偏多' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'hairTexture',
    title: '发质更接近？',
    options: [
      { value: 'soft', label: '细软' },
      { value: 'coarse', label: '粗硬' },
      { value: 'curly', label: '自然卷' },
      { value: 'flat', label: '贴头皮' },
      { value: 'unknown', label: '不确定' }
    ]
  },
  {
    id: 'scene',
    title: '本次主要使用场景是？',
    options: [
      { value: 'work', label: '通勤' },
      { value: 'date', label: '约会' },
      { value: 'interview', label: '面试' },
      { value: 'party', label: '聚会' },
      { value: 'travel', label: '旅行' },
      { value: 'wedding', label: '婚礼宾客' },
      { value: 'daily', label: '日常休闲' },
      { value: 'photo', label: '拍照出片' }
    ]
  },
  {
    id: 'season',
    title: '当前季节或天气更接近？',
    options: [
      { value: 'spring', label: '春' },
      { value: 'summer', label: '夏' },
      { value: 'autumn', label: '秋' },
      { value: 'winter', label: '冬' }
    ]
  },
  {
    id: 'formalLevel',
    title: '需要多正式？',
    options: [
      { value: 'casual', label: '休闲' },
      { value: 'semi', label: '半正式' },
      { value: 'formal', label: '正式' }
    ]
  },
  {
    id: 'effect',
    title: '最想达到的视觉效果是？',
    options: [
      { value: 'tall', label: '显高' },
      { value: 'slim', label: '显瘦' },
      { value: 'crisp', label: '干练' },
      { value: 'soft', label: '温柔' },
      { value: 'delicate', label: '精致' },
      { value: 'relaxed', label: '松弛' }
    ]
  },
  {
    id: 'stylePreference',
    title: '更偏好的风格是？',
    options: [
      { value: 'minimal', label: '极简' },
      { value: 'commute', label: '通勤' },
      { value: 'sweet', label: '甜美' },
      { value: 'french', label: '法式' },
      { value: 'korean', label: '韩系' },
      { value: 'japanese', label: '日系' },
      { value: 'retro', label: '复古' },
      { value: 'street', label: '街头' },
      { value: 'elegant', label: '优雅' },
      { value: 'neutral', label: '中性' }
    ]
  }
]

const QUESTION_MAP = {}
const OPTION_LABELS = {}

QUESTION_BANK.forEach((question) => {
  QUESTION_MAP[question.id] = question
  OPTION_LABELS[question.id] = {}
  question.options.forEach((option) => {
    OPTION_LABELS[question.id][option.value] = option.label
  })
})

function getAgeGroup(ageStage) {
  if (['age_0_3', 'age_4_12'].indexOf(ageStage) !== -1) {
    return 'child'
  }
  if (['age_13_17', 'age_18_22'].indexOf(ageStage) !== -1) {
    return 'campus'
  }
  if (ageStage === 'age_56_plus') {
    return 'senior'
  }
  return 'adult'
}

function getQuestionIds(type, answers) {
  const ageGroup = getAgeGroup(answers && answers.ageStage)

  if (type === 'hair') {
    if (ageGroup === 'child') {
      return ['gender', 'ageStage', 'faceShape', 'hairVolume', 'hairTexture', 'childPriority']
    }
    return ['gender', 'ageStage', 'faceShape', 'neck', 'hairVolume', 'hairTexture', 'skinTone', 'stylePreference', 'effect']
  }

  if (type === 'scene') {
    if (ageGroup === 'child') {
      return ['gender', 'ageStage', 'childScene', 'season', 'childPriority', 'skinTone']
    }
    if (ageGroup === 'campus') {
      return ['gender', 'ageStage', 'heightRange', 'shoulder', 'bodyType', 'waist', 'leg', 'campusScene', 'effect', 'stylePreference']
    }
    return ['gender', 'ageStage', 'heightRange', 'shoulder', 'bodyType', 'waist', 'leg', 'scene', 'formalLevel', 'effect', 'stylePreference']
  }

  if (ageGroup === 'child') {
    return ['gender', 'ageStage', 'childScene', 'season', 'childPriority', 'skinTone']
  }
  if (ageGroup === 'campus') {
    return ['gender', 'ageStage', 'faceShape', 'shoulder', 'bodyType', 'skinTone', 'hairVolume', 'campusScene', 'season', 'effect', 'stylePreference']
  }
  if (ageGroup === 'senior') {
    return ['gender', 'ageStage', 'faceShape', 'neck', 'shoulder', 'bodyType', 'skinTone', 'hairVolume', 'scene', 'season', 'effect', 'stylePreference']
  }
  return ['gender', 'ageStage', 'faceShape', 'neck', 'heightRange', 'shoulder', 'bodyType', 'waist', 'leg', 'skinTone', 'hairVolume', 'hairTexture', 'scene', 'formalLevel', 'season', 'effect', 'stylePreference']
}

function getQuestions(type, answers) {
  return getQuestionIds(type || 'quick', answers || {})
    .map((id) => QUESTION_MAP[id])
    .filter(Boolean)
}

function getOptionLabel(key, value) {
  if (!key || !value || !OPTION_LABELS[key]) {
    return ''
  }
  return OPTION_LABELS[key][value] || ''
}

module.exports = {
  DIAGNOSIS_TYPES,
  QUESTION_BANK,
  OPTION_LABELS,
  getAgeGroup,
  getQuestions,
  getOptionLabel
}
