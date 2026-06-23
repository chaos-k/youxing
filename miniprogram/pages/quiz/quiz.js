const { DIAGNOSIS_TYPES, getQuestions } = require('../../data/questionnaire.js')
const { generateReport } = require('../../utils/recommender.js')
const { saveReport } = require('../../utils/storage.js')

Page({
  data: {
    diagnosisType: 'quick',
    diagnosisName: '完整诊断',
    questions: [],
    currentQuestion: null,
    currentIndex: 0,
    currentSelected: '',
    progressText: '',
    progressWidth: 0,
    answers: {}
  },

  onLoad(query) {
    const diagnosisType = query.type || 'quick'
    const questions = getQuestions(diagnosisType, {})
    const diagnosisName = DIAGNOSIS_TYPES[diagnosisType]
      ? DIAGNOSIS_TYPES[diagnosisType].title
      : DIAGNOSIS_TYPES.quick.title

    this.setData({
      diagnosisType,
      diagnosisName,
      questions,
      currentIndex: 0,
      answers: {}
    })
    this.syncCurrentQuestion()
  },

  syncCurrentQuestion() {
    const total = this.data.questions.length || 1
    const safeIndex = Math.min(this.data.currentIndex, total - 1)
    const currentQuestion = this.data.questions[safeIndex]
    const selected = currentQuestion ? this.data.answers[currentQuestion.id] || '' : ''
    const current = safeIndex + 1

    this.setData({
      currentIndex: safeIndex,
      currentQuestion,
      currentSelected: selected,
      progressText: `${current}/${total}`,
      progressWidth: Math.round((current / total) * 100)
    })
  },

  selectOption(event) {
    const key = event.currentTarget.dataset.key
    const value = event.currentTarget.dataset.value
    const answers = Object.assign({}, this.data.answers)
    answers[key] = value

    const questions = getQuestions(this.data.diagnosisType, answers)
    const nextIndex = Math.max(
      0,
      questions.findIndex((question) => question.id === key)
    )

    this.setData({
      answers,
      questions,
      currentIndex: nextIndex,
      currentSelected: value
    })
    this.syncCurrentQuestion()
  },

  prevQuestion() {
    if (this.data.currentIndex === 0) {
      wx.navigateBack()
      return
    }
    this.setData({
      currentIndex: this.data.currentIndex - 1
    })
    this.syncCurrentQuestion()
  },

  nextQuestion() {
    if (!this.data.currentSelected) {
      wx.showToast({
        title: '请选择一项',
        icon: 'none'
      })
      return
    }

    if (this.data.currentIndex >= this.data.questions.length - 1) {
      this.submitReport()
      return
    }

    this.setData({
      currentIndex: this.data.currentIndex + 1
    })
    this.syncCurrentQuestion()
  },

  submitReport() {
    const report = generateReport(this.data.answers, this.data.diagnosisType)
    saveReport(report)
    wx.redirectTo({
      url: `/pages/result/result?id=${report.id}`
    })
  }
})
