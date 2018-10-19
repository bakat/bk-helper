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
  reportingType: 'standard', // detail, standard
  domainMasking: true,
  jobWidget: true,
  openAPI: true,
  brandedCareerPage: true,
  productTranning: 'online', // on-site, online
  AccountExecutiveForSupport: true,
  enableJobUrl: false,
  mergeCareerSite: []
}

module.exports = {
  free: extend({}, defaults, {
    preAssessmentQuestion: false,
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  trial: extend({}, defaults, {
    downloadCV: false,
    multipleCompany: false
  }),
  standard: extend({}, defaults, {
    preAssessmentQuestion: false,
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    customEmailTemplate: false,
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
