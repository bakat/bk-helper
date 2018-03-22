'use strict'

module.exports = {
  shortAnswer: {
    questionType: 'shortAnswer',
    questionText: 'Untitled Question',
    description: '',
    score: 0,
    isRequired: true,
    pos: 1,
    questionImageUrl: '',
    answerText: ''
  },
  linearScale: {
    questionType: 'linearScale',
    questionText: ' ',
    questionImageUrl: '',
    description: '',
    score: 0,
    isRequired: true,
    pos: 0,
    linear: {
      min: 0,
      labelMin: ' ',
      max: 3,
      labelMax: ''
    }
  },
  singleAnswer: {
    questionType: 'singleAnswer',
    questionText: 'Untitled Question',
    questionImageUrl: '',
    description: '',
    score: 0,
    isRequired: true,
    pos: 1,
    options: [{
      label: 'Option 1',
      imagesUrl: '',
      isAnswer: false
    },
    {
      label: 'Option 2',
      imagesUrl: '',
      isAnswer: false
    }],
    shuffleOpitons: false
  }
}
