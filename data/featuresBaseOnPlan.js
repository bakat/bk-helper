'use strict'

const extend = require('extend')

const defaults = {
  preAssessmentQuestion: true,
  postScreenAssessmentQuestion: true,
  downloadCV: true,
  bulkSendEmail: true,
  bulkSendVideoInterview: true,
  bulkSendAssessment: true,
  bulkSendHiringForm: true,
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
  allowExternalApplyLink: false,
  mergeCareerSite: []
}
// standard > startup ; professional > business ; growth > scale
module.exports = {
  free: extend({}, defaults, {
    preAssessmentQuestion: false,
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    bulkSendHiringForm: false,
    requestExternalUserFeedback: false,
    customHiringPlan: false,
    customHiringTeam: false,
    customEmailTemplate: false,
    collaborativeHiring: false,
    setInterviewSchedule: false,
    multipleCompany: false,
    downloadReport: false,
    domainMasking: false,
    jobWidget: false,
    openAPI: false,
    brandedCareerPage: false,
    AccountExecutiveForSupport: true,
    enableJobUrl: false,
    allowExternalApplyLink: false
  }),
  trial: extend({}, defaults, {
    downloadCV: false,
    multipleCompany: false
  }),
  standard: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    customEmailTemplate: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  startup: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    downloadCV: false,
    bulkSendEmail: false,
    bulkSendVideoInterview: false,
    bulkSendAssessment: false,
    bulkSendHiringForm: false,
    customEmailTemplate: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  professional: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  business: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    requestExternalUserFeedback: false,
    multipleCompany: false
  }),
  growth: extend({}, defaults, {
    postScreenAssessmentQuestion: false
  }),
  scale: extend({}, defaults, {
    postScreenAssessmentQuestion: false,
    multipleCompany: false
  }),
  enterprise: defaults,
  enterpriseLite: defaults,
  enterprisePremium: defaults
}
