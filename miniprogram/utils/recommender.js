const { getOptionLabel } = require('../data/questionnaire.js')
const {
  STYLE_RULES,
  FALLBACKS,
  STYLE_KEYWORDS,
  COLOR_SWATCHES,
  SCENE_OUTFITS
} = require('../data/rules.js')

const CATEGORY_NAMES = {
  hair: '发型建议',
  color: '适合颜色',
  top: '上装建议',
  bottom: '下装建议',
  shoe: '鞋履建议',
  accessory: '配饰建议'
}

function matchesRule(rule, answers) {
  const conditions = rule.conditions || {}
  return Object.keys(conditions).every((key) => {
    const actual = answers[key]
    if (!actual || actual === 'unknown') {
      return false
    }
    const expected = Array.isArray(conditions[key]) ? conditions[key] : [conditions[key]]
    return expected.indexOf(actual) !== -1
  })
}

function unique(items) {
  const seen = {}
  return items.filter((item) => {
    if (!item || seen[item]) {
      return false
    }
    seen[item] = true
    return true
  })
}

function collectCategory(category, matchedRules) {
  const rules = matchedRules.filter((rule) => rule.category === category)
  const fallback = FALLBACKS[category] || { recommend: [], avoid: [], reason: '' }
  const recommend = unique(rules.reduce((list, rule) => list.concat(rule.recommend || []), []))
    .concat(fallback.recommend || [])
  const avoid = unique(rules.reduce((list, rule) => list.concat(rule.avoid || []), []))
    .concat(fallback.avoid || [])
  const reasons = rules.length
    ? unique(rules.map((rule) => rule.reason))
    : unique([fallback.reason || ''])

  return {
    title: CATEGORY_NAMES[category],
    recommend: unique(recommend).slice(0, 7),
    avoid: unique(avoid).slice(0, 5),
    avoidText: unique(avoid).slice(0, 5).join('、'),
    reason: reasons.slice(0, 3).join(' ')
  }
}

function buildKeywords(answers) {
  const keys = ['ageStage', 'childScene', 'campusScene', 'scene', 'effect', 'stylePreference', 'bodyType']
  const keywords = []

  keys.forEach((key) => {
    const value = answers[key]
    const values = STYLE_KEYWORDS[key] && STYLE_KEYWORDS[key][value]
    if (values) {
      keywords.push.apply(keywords, values)
      return
    }
    const label = getOptionLabel(key, value)
    if (label) {
      keywords.push(label)
    }
  })

  return unique(keywords).slice(0, 6)
}

function buildProfileTags(answers) {
  const keys = [
    'gender',
    'ageStage',
    'faceShape',
    'skinTone',
    'bodyType',
    'shoulder',
    'hairVolume',
    'scene',
    'campusScene',
    'childScene',
    'effect',
    'stylePreference'
  ]
  return keys
    .map((key) => getOptionLabel(key, answers[key]))
    .filter((label) => label && label !== '不确定')
    .slice(0, 8)
}

function buildColorPalette(colors) {
  return colors.map((name) => ({
    name,
    hex: COLOR_SWATCHES[name] || '#D8D0C5'
  })).slice(0, 6)
}

function buildOutfit(answers, packages) {
  const scene = answers.scene || 'daily'
  const formalLevel = answers.formalLevel || 'semi'
  const sceneOutfits = SCENE_OUTFITS[scene] || SCENE_OUTFITS.daily
  const sceneTemplate = sceneOutfits[formalLevel] || sceneOutfits.semi || sceneOutfits.casual
  const top = packages.top.recommend[0]
  const bottom = packages.bottom.recommend[0]
  const shoe = packages.shoe.recommend[0]
  const accessory = packages.accessory.recommend[0]
  const alternative = `${top} + ${bottom} + ${shoe} + ${accessory}`

  return unique([sceneTemplate, alternative])
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}`
}

function getSceneLabel(answers) {
  return getOptionLabel('scene', answers.scene) ||
    getOptionLabel('campusScene', answers.campusScene) ||
    getOptionLabel('childScene', answers.childScene) ||
    '日常'
}

function getTypeTitle(diagnosisType) {
  if (diagnosisType === 'hair') {
    return '发型定位'
  }
  if (diagnosisType === 'scene') {
    return '身形版型建议'
  }
  return '有型诊断'
}

function generateReport(answers, diagnosisType) {
  const matchedRules = STYLE_RULES
    .filter((rule) => matchesRule(rule, answers))
    .sort((left, right) => right.priority - left.priority)

  const packages = {
    hair: collectCategory('hair', matchedRules),
    color: collectCategory('color', matchedRules),
    top: collectCategory('top', matchedRules),
    bottom: collectCategory('bottom', matchedRules),
    shoe: collectCategory('shoe', matchedRules),
    accessory: collectCategory('accessory', matchedRules)
  }

  const isHairOnly = diagnosisType === 'hair'
  const keywords = buildKeywords(answers)
  const sceneLabel = getSceneLabel(answers)
  const typeTitle = getTypeTitle(diagnosisType)
  const outfit = isHairOnly
    ? ['本次只输出发型方向，不做服饰穿搭匹配。']
    : buildOutfit(answers, packages)
  const sections = isHairOnly
    ? [packages.hair]
    : [packages.hair, packages.color, packages.top, packages.bottom, packages.shoe, packages.accessory]
  const avoidAdvice = unique(
    Object.keys(packages).reduce((list, key) => list.concat(packages[key].avoid || []), [])
  ).slice(0, 8)

  return {
    id: `report_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    diagnosisType: diagnosisType || 'quick',
    title: `${sceneLabel}${typeTitle}`,
    sceneLabel,
    createdAt: formatDate(new Date()),
    keywords,
    profileTags: buildProfileTags(answers),
    summary: `更适合走${keywords.length ? keywords.join('、') : '清爽、耐看'}路线；重点放在比例、颜色明度和场景感。`,
    colorPalette: buildColorPalette(packages.color.recommend),
    sections,
    outfit,
    avoidAdvice,
    reasons: unique(matchedRules.map((rule) => rule.reason)).slice(0, 6),
    answers
  }
}

module.exports = {
  generateReport
}
