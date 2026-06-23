const REPORTS_KEY = 'yijian_reports'
const MAX_REPORTS = 30

function getReports() {
  return wx.getStorageSync(REPORTS_KEY) || []
}

function getReportById(id) {
  const reports = getReports()
  return reports.find((report) => report.id === id)
}

function getLatestReport() {
  const reports = getReports()
  return reports.length ? reports[0] : null
}

function saveReport(report) {
  const reports = getReports()
  const nextReports = reports.filter((item) => item.id !== report.id)
  nextReports.unshift(report)
  wx.setStorageSync(REPORTS_KEY, nextReports.slice(0, MAX_REPORTS))
  return report
}

function clearReports() {
  wx.removeStorageSync(REPORTS_KEY)
}

module.exports = {
  getReports,
  getReportById,
  getLatestReport,
  saveReport,
  clearReports
}
