const { getReportById } = require('../../utils/storage.js')

Page({
  data: {
    report: null
  },

  onLoad(query) {
    const report = getReportById(query.id)
    this.setData({
      report
    })
  },

  onShareAppMessage() {
    const report = this.data.report
    return {
      title: report ? `我的${report.sceneLabel}建议` : '有型穿搭建议',
      path: '/pages/home/home'
    }
  }
})
