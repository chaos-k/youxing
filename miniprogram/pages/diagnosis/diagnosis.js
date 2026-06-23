Page({
  data: {
    cards: [
      {
        type: 'quick',
        title: '完整诊断',
        subtitle: '适合第一次使用，合并判断性别表达、年龄阶段、脸型、体型、肤色和场景。',
        tags: ['综合', '自适应']
      },
      {
        type: 'hair',
        title: '发型定位',
        subtitle: '只围绕脸型、颈长、发量、发质和年龄气质给出发型方向。',
        tags: ['发型', '轻测']
      },
      {
        type: 'scene',
        title: '身形版型',
        subtitle: '根据肩线、腰线、腿型和使用场景，推荐上衣、裤裙、外套和鞋型方向。',
        tags: ['比例', '版型']
      }
    ]
  },

  start(event) {
    const type = event.currentTarget.dataset.type || 'quick'
    wx.navigateTo({
      url: `/pages/quiz/quiz?type=${type}`
    })
  }
})
