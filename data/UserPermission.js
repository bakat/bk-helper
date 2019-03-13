'use strict'

module.exports = {
  permission: {
    general: [
      {
          id: 1,
          name: 'Create and Edit Job',
          description: 'Create and Edit Job',
          slug: 'createEditJob',
          url: '/jobs/create|job/$1/edit'
      },
      {
          id: 2,
          name: 'Publish Job',
          description: 'Publish Job',
          slug: 'publishJob',
          url: '/jobs/$1/edit'
      }
    ],
    jobConfiguration: [
      {
          id: 3,
          name: 'Job Description',
          description: 'Job Description',
          slug: 'jobDescription',
          url: '/jobs/edit'
      },
      {
          id: 4,
          name: 'Application Form',
          description: 'Application Form',
          slug: 'ApplicationForm',
          url: '/jobs/edit/$1/application-form'
      },
      {
          id: 5,
          name: 'Pre-Assessment',
          description: 'Pre Assessment Test',
          slug: 'PreAssessment',
          url: '/jobs/edit/$1/pre-assessment'
      },
      {
          id: 6,
          name: 'Hiring Team',
          description: 'Hiring Team',
          slug: 'HiringTeam',
          url: '/jobs/edit/$1/hiring-team'
      }
    ]
  },
  access: {
    fullAccess: [
        {
            id: 1,
            access: true
        },
        {
            id: 2,
            access: true
        },
        {
            id: 3,
            access: true
        },
        {
            id: 4,
            access: true
        },
        {
            id: 5,
            access: true
        },
        {
            id: 6,
            access: true
        }
    ],
    defaultAccess: [
        {
            id: 1,
            access: true
        },
        {
            id: 2,
            access: true
        },
        {
            id: 3,
            access: false
        },
        {
            id: 4,
            access: true
        },
        {
            id: 5,
            access: true
        },
        {
            id: 6,
            access: true
        }
    ]
  }
}
