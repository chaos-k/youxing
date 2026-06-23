const { getReports } = require('../../utils/storage.js')

Page({
  data: {
    reportCount: 0,
    appName: '有型',
    roadmap: [
      '衣橱管理',
      '图片辅助识别',
      '报告海报',
      '真人顾问复核'
    ]
  },

  onShow() {
    this.setData({
      reportCount: getReports().length
    })
  },

  openReports() {
    wx.switchTab({
      url: '/pages/reports/reports'
    })
  },

  startDiagnosis() {
    wx.switchTab({
      url: '/pages/diagnosis/diagnosis'
    })
  }
})
