'use strict'

module.exports = {
  permission: [
    {
        name: 'general',
        ref: 'general',
        listGroup: [
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
    },
    {
        name: 'Job Configuration',
        ref: 'jobConfiguration',
        listGroup: [
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
    {
        name: 'Application Action Menu',
        ref: 'applicationActionMenu',
        listGroup: [
            {
                id: 7,
                name: 'Send Email',
                description: 'Send Email',
                slug: 'applicationActionMenu',
                url: '/jobs/edit'
            },
            {
                id: 8,
                name: 'Set Schedule',
                description: 'Set Schedule',
                slug: 'setSchedule',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 9,
                name: 'Add Comment',
                description: 'Add Comment',
                slug: 'addComment',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 10,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewForm',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 11,
                name: 'Assessment',
                description: 'Assessment',
                slug: 'Assessment',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 12,
                name: 'Consideration',
                description: 'Consideration',
                slug: 'consideration',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 13,
                name: 'Manage Applicant',
                description: 'Manage Applicant',
                slug: 'manageApplicant',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 14,
                name: 'Request Feedback',
                description: 'Request Feedback',
                slug: 'requestFeedback',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 15,
                name: 'Evaluation',
                description: 'Evaluation',
                slug: 'evaluation',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 16,
                name: 'Duplicate Applicant',
                description: 'Duplicate Applicant',
                slug: 'duplicateApplicant',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 17,
                name: 'Delete Applicant',
                description: 'Delete Applicant',
                slug: 'deleteApplicant',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 18,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklist',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 19,
                name: 'Add Applicant',
                description: 'Add Applicant',
                slug: 'addApplicant',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 20,
                name: 'Move Applicant',
                description: 'Move Applicant',
                slug: 'moveApplicant',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Application Information',
        ref: 'applicationInformation',
        listGroup: [
            {
                id: 21,
                name: 'Profile',
                description: 'Profile',
                slug: 'profile',
                url: '/jobs/edit'
            },
            {
                id: 22,
                name: 'Timeline',
                description: 'Timeline',
                slug: 'timeline',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 23,
                name: 'Assessment',
                description: 'Assessment',
                slug: 'assessment-info',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 24,
                name: 'Comments',
                description: 'Comments',
                slug: 'comments',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Menu',
        ref: 'menu',
        listGroup: [
            {
                id: 21,
                name: 'Dashboard (Job Lists)',
                description: 'Dashboard (Job Lists)',
                slug: 'jobLists',
                url: '/jobs/edit'
            },
            {
                id: 22,
                name: 'Applicants',
                description: 'Applicants',
                slug: 'applicants',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 23,
                name: 'Reports',
                description: 'Reports',
                slug: 'reports-info',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 24,
                name: 'Referral',
                description: 'Referral',
                slug: 'referral',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 25,
                name: 'Agenda',
                description: 'Agenda',
                slug: 'agenda',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 26,
                name: 'Resume Search',
                description: 'Resume Search',
                slug: 'resumeSearch',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Company',
        ref: 'company',
        listGroup: [
            {
                id: 27,
                name: 'General Info',
                description: 'General Info',
                slug: 'generalInfo',
                url: '/jobs/edit'
            },
            {
                id: 28,
                name: 'Manage Companies',
                description: 'Manage Companies',
                slug: 'manageCompanies',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 29,
                name: 'Career Page',
                description: 'Career Page',
                slug: 'careerPage',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 30,
                name: 'Team Member',
                description: 'Team Member',
                slug: 'teamMember',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 31,
                name: 'Hiring Stages',
                description: 'Hiring Stages',
                slug: 'hiringStages',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 32,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklist',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Templates',
        ref: 'templates',
        listGroup: [
            {
                id: 33,
                name: 'Email',
                description: 'Email',
                slug: 'email',
                url: '/jobs/edit'
            },
            {
                id: 34,
                name: 'Pre Assessment',
                description: 'Pre Assessment',
                slug: 'preAssessment',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 35,
                name: 'Basic Assessment',
                description: 'Basic Assessment',
                slug: 'basicAssessment',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 36,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewForm',
                url: '/jobs/edit/$1/hiring-team'
            },
            {
                id: 37,
                name: 'Feedback Form (Candidate Experience)',
                description: 'Feedback Form (Candidate Experience)',
                slug: 'Feedback Form',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Payment',
        ref: 'payment',
        listGroup: [
            {
                id: 38,
                name: 'Subscription and Coin',
                description: 'Subscription and Coin',
                slug: 'subscriptionAndCoin',
                url: '/jobs/edit'
            },
            {
                id: 39,
                name: 'Billing Info',
                description: 'Billing Info',
                slug: 'billingInfo',
                url: '/jobs/edit/$1/application-form'
            },
            {
                id: 40,
                name: 'Billing History',
                description: 'Billing History',
                slug: 'billingHistory',
                url: '/jobs/edit/$1/pre-assessment'
            },
            {
                id: 41,
                name: 'Coin History',
                description: 'Coin History',
                slug: 'coinHistory',
                url: '/jobs/edit/$1/hiring-team'
            }
        ]
    },
    {
        name: 'Integration',
        ref: 'integration',
        listGroup: [
            {
                id: 42,
                name: 'UH Job Widget',
                description: 'UH Job Widget',
                slug: 'uhJobWidget',
                url: '/jobs/edit'
            },
            {
                id: 43,
                name: 'HRIS',
                description: 'HRIS',
                slug: 'hris',
                url: '/jobs/edit/$1/application-form'
            }
        ]
    },
    {
        name: 'User Access',
        ref: 'userAccess',
        listGroup: [
            {
                id: 44,
                name: 'Invite New User',
                description: 'Invite New User',
                slug: 'inviteNewUser',
                url: '/jobs/edit'
            },
            {
                id: 45,
                name: 'Authorize Email and Password',
                description: 'Authorize Email and Password',
                slug: 'authorizeEmailAndPassword',
                url: '/jobs/edit/$1/application-form'
            }
        ]
    }
  ],
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
