const { getLatestReport } = require('../../utils/storage.js')

Page({
  data: {
    latestReport: null,
    entries: [
      {
        type: 'quick',
        title: '完整诊断',
        meta: '性别 / 年龄 / 脸型 / 体型 / 场景'
      },
      {
        type: 'hair',
        title: '发型定位',
        meta: '脸型 / 颈长 / 发量 / 年龄气质'
      },
      {
        type: 'scene',
        title: '身形版型',
        meta: '肩线 / 腰线 / 腿型 / 场景'
      }
    ],
    trendTags: ['通勤质感', '校园清爽', '儿童舒适', '银发精神']
  },

  onShow() {
    this.setData({
      latestReport: getLatestReport()
    })
  },

  startQuick() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?type=quick'
    })
  },

  openEntry(event) {
    const type = event.currentTarget.dataset.type || 'quick'
    wx.navigateTo({
      url: `/pages/quiz/quiz?type=${type}`
    })
  },

  openLatest() {
    if (!this.data.latestReport) {
      return
    }
    wx.navigateTo({
      url: `/pages/result/result?id=${this.data.latestReport.id}`
    })
  }
})
