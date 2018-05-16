'use strict'

const extend = require('extend')

const defaults = {
  preAssessmentQuestion: true,
  postScreenAssessmentQuestion: true,
  downloadCV: true,
  bulkSendEmail: true,
  bulkSendVideoInterview: true,
  bulkSendAssessment: true,
  requestExternalUserFeedback: true,
  customHiringPlan: true,
  customHiringTeam: true,
  customEmailTemplate: true,
  collaborativeHiring: true,
  setInterviewSchedule: true,
  multipleCompany: true,
  downloadReport: true,
  reportingType: 'detail', // detail, standard
  domainMasking: true,
  jobWidget: true,
  openAPI: true,
  productTranning: 'on-site', // on-site, online
  AccountExecutiveForSupport: true,
}

module.exports = {
  trial: extend({}, defaults, {
    downloadCV: false,
    downloadReport: false
  }),
  trial: extend({}, defaults, {
    preAssessmentQuestion: false,
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  standard: extend({}, defaults, {
    preAssessmentQuestion: false,
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  professional: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  growth: extend({}, defaults, {
    postScreenAssessmentQuestion: false
  }),
  enterprise: defaults,
  enterpriseLite: defaults,
  enterprisePremium: defaults
}
