const { getReports, clearReports } = require('../../utils/storage.js')

Page({
  data: {
    reports: []
  },

  onShow() {
    this.setData({
      reports: getReports()
    })
  },

  openReport(event) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/result/result?id=${id}`
    })
  },

  startDiagnosis() {
    wx.switchTab({
      url: '/pages/diagnosis/diagnosis'
    })
  },

  clearAll() {
    if (!this.data.reports.length) {
      return
    }
    wx.showModal({
      title: '清空报告',
      content: '确认清空本机保存的报告？',
      confirmText: '清空',
      success: (res) => {
        if (!res.confirm) {
          return
        }
        clearReports()
        this.setData({
          reports: []
        })
      }
    })
  }
})
