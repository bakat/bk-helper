'use strict'

module.exports = [
  {
    state: 'is_wizard'
  },
  { state: 'is_logo',
    text: 'Add company Logo',
    link: '/account/company'},
  { state: 'is_publish_job',
    text: 'Create and publish a job',
    link: '/jobs/create'},
  { state: 'is_subscriptions',
    text: 'Subscribe a plan',
    link: '/account/subscription-plan' },
  { state: 'is_team_member',
    text: 'Add team members',
    link: '/account/account-member' },
  { state: 'is_company_address',
    text: 'Add company address',
    link: '/account/company'},
  {
    state: 'is_photo_profile',
    text: 'Add profile picture',
    link: '/account/profile'
  }
]
