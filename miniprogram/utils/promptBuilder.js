function buildReportPolishPrompt(report) {
  return [
    '你是一名专业形象顾问。请基于以下结构化推荐，生成自然、尊重、可执行的中文穿搭报告。',
    '要求：不评价身材缺陷，不夸大承诺，不新增与规则冲突的建议，保留所有推荐单品和避雷项。',
    '',
    `标题：${report.title}`,
    `画像标签：${report.profileTags.join('、')}`,
    `风格关键词：${report.keywords.join('、')}`,
    `完整搭配：${report.outfit.join('；')}`,
    `避雷项：${report.avoidAdvice.join('、')}`,
    '',
    '分项建议：',
    report.sections.map((section) => {
      return `${section.title}：推荐 ${section.recommend.join('、')}；避开 ${section.avoidText}；原因 ${section.reason}`
    }).join('\n')
  ].join('\n')
}

module.exports = {
  buildReportPolishPrompt
}
