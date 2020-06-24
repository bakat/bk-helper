'use strict'

module.exports = {
  template: {
    templateOne: [
      'disqualified',
      'reverted',
      'added-a-comment',
      'sent-an-email',
      'updated-applicant',
      'sent-invitation-astronaut',
      'sent-invitation-cut-e',
      'interview',
      'meeting',
      'call',
      'sent-candidate-link',
      'provided-feedback',
      'exported-gadjian',
      'sourced',
      'blacklisted',
      'reverted-blacklist',
      'multiple-scheduled-invitation',
      'sent-the-hiring-form',
      'resent-the-hiring-form',
      'sent-the-employee-form',
      'resent-the-employee-form',
      'exported-sap',
      'evaluated',
      'error-sap',
      'success-sap'
    ],
    templateTwo: [
      'sent-astronaut-answers',
      'applied',
      'received-result-assessment',
      'replied',
      'moved-to-%s',
      'sent-invitation-assessment'
    ],
    templateThree: [
      'completed-the-hiring-form',
      'completed-the-employee-form'
    ]
  },

  candidates: {
    // user - applicant - position - company
    'disqualified': 'disqualified %s for %s position at %s',
    'reverted': 'reverted %s for %s position at %s',
    'added-a-comment': 'added a comment for %s for %s position at %s.',
    'sent-an-email': 'sent an email to %s for %s position at %s',
    'updated-applicant': 'updated %s data for %s position at %s',
    'sent-invitation-astronaut': 'sent a video interview invitation to %s for %s position at %s',
    'sent-invitation-cut-e': 'sent a Psychometric Assessment to %s for %s position at %s',
    'interview': 'scheduled an on site interview with %s for %s position at %s',
    'meeting': 'scheduled a meeting with %s for %s position at %s',
    'call': 'scheduled a call with %s for %s position at %s',
    'sent-candidate-link': 'sent an External Feedback for %s for %s position at %s',
    'provided-feedback': 'submitted an External Feedback for %s for %s position at %s',
    'exported-gadjian': 'exported %s to Gadjian HRIS for %s position  at %s',
    'sourced': 'sourced %s for %s position at %s',
    'blacklisted': 'blacklisted %s for %s position at %s',
    'reverted-blacklist': 'removed %s from blacklist for %s position at %s',
    'multiple-scheduled-invitation': 'sent multiple scheduled invitations to %s for %s position at %s',
    'sent-the-hiring-form': 'sent the Hiring Form to %s for %s position at %s',
    'resent-the-hiring-form': 'resent the Hiring Form to %s for %s position at %s',
    'sent-the-employee-form': 'sent the Employee Form to %s for %s position at %s',
    'resent-the-employee-form': 'resent the Employee Form to %s for %s position at %s',
    'exported-sap': 'exported %s data to SAP for %s position at %s',
    'evaluated': 'added an evaluation for %s for %s position at %s',
    'error-sap': 'error exported %s data to SAP for %s position at %s',
    'success-sap': 'successfully exported %s data to SAP for %s position at %s',

    // applicant - position - company
    'sent-astronaut-answers': 'submitted his/her video interview answers for %s position at %s',
    'applied': 'applied for %s position at %s',
    'received-result-assessment': 'submitted a Basic Assessment results for %s position at %s',
    'replied': 'replied message for %s position at %s',

    // user - position - company
    'moved-to-%s': 'moved $applicant to $stageName stage for %s position at %s',
    'sent-invitation-assessment': 'sent a Basic Assessment invitation for %s position at %s',

    // applicant - user - position - company
    'completed-the-hiring-form': 'completed the Hiring Form sent by %s for %s position at %s',
    'completed-the-employee-form': 'completed the Employee Form sent by %s for %s position at %s',

    // company - position
    'hired': 'hired by %s for position %s',

    // activity - position - company
    'exported-%s': '%s for %s position at %s',
    'sourced-by-%s': '%s for %s position at %s'

  }
}
