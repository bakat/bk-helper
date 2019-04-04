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
                urlFront: '/jobs/create|job/$1/edit',
                urlBackend: '/position/(create|update|clone|close|archive|unarchive|delete|remove)/'
            },
            {
                id: 2,
                name: 'Publish Job',
                description: 'Publish Job',
                slug: 'publishJob',
                urlFront: '/jobs/$1/edit',
                urlBackend: '/position/publish'
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
                urlFront: '/jobs/edit',
                urlBackend: '/position/get-by-id/([a-z0-9]{25})'
            },
            {
                id: 4,
                name: 'Application Form',
                description: 'Application Form',
                slug: 'ApplicationForm',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/application-form/upsert'
            },
            {
                id: 5,
                name: 'Pre-Assessment',
                description: 'Pre Assessment Test',
                slug: 'PreAssessment',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/preassessments'
            },
            {
                id: 6,
                name: 'Hiring Team',
                description: 'Hiring Team',
                slug: 'HiringTeam',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/companies/members/([a-z0-9]{25})'
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
                urlFront: '/jobs/edit',
                urlBackend: '/applicants/email/send'
            },
            {
                id: 8,
                name: 'Set Schedule',
                description: 'Set Schedule',
                slug: 'setSchedule',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/applicants/set-schedule'
            },
            {
                id: 9,
                name: 'Add Comment',
                description: 'Add Comment',
                slug: 'addComment',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/applicants/comment'
            },
            {
                id: 10,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewForm',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/interview-forms'
            },
            {
                id: 11,
                name: 'Assessment',
                description: 'Assessment',
                slug: 'Assessment',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/(cut-e|assessments)/send-assessment'
            },
            {
                id: 12,
                name: 'Consideration',
                description: 'Consideration',
                slug: 'consideration',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/jobs/$1/edit'
            },
            {
                id: 13,
                name: 'Manage Applicant',
                description: 'Manage Applicant',
                slug: 'manageApplicant',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/applicants/update'
            },
            {
                id: 14,
                name: 'Request Feedback',
                description: 'Request Feedback',
                slug: 'requestFeedback',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/request-feedback-applicant/([a-z0-9]{25})/send-invitation'
            },
            {
                id: 15,
                name: 'Evaluation',
                description: 'Evaluation',
                slug: 'evaluation',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/event/submit-custom-evaluation'
            },
            {
                id: 16,
                name: 'Duplicate Applicant',
                description: 'Duplicate Applicant',
                slug: 'duplicateApplicant',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/positions/assign-new-position'
            },
            {
                id: 17,
                name: 'Delete Applicant',
                description: 'Delete Applicant',
                slug: 'deleteApplicant',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/applicants/remove'
            },
            {
                id: 18,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklist',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/blacklist/([a-z0-9]{25})/(add|update|get|post-excel|set-applicant)'
            },
            {
                id: 19,
                name: 'Add Applicant',
                description: 'Add Applicant',
                slug: 'addApplicant',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/positions/([a-z0-9]{25})/sourced'
            },
            {
                id: 20,
                name: 'Move Applicant',
                description: 'Move Applicant',
                slug: 'moveApplicant',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/applicants/([a-z0-9]{25})/move'
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
                urlFront: '/jobs/edit',
                urlBackend: '/applicants/([a-z0-9]{25})'
            },
            {
                id: 22,
                name: 'Timeline',
                description: 'Timeline',
                slug: 'timeline',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/applicants/activities/timeline/([a-z0-9]{25})/([a-z0-9]{25})'
            },
            {
                id: 23,
                name: 'Assessment',
                description: 'Assessment',
                slug: 'assessment-info',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/jobs/$1/edit'
            },
            {
                id: 24,
                name: 'Comments',
                description: 'Comments',
                slug: 'comments',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/applicants/activities/note/([a-z0-9]{25})/([a-z0-9]{25})'
            }
        ]
    },
    {
        name: 'Menu',
        ref: 'menu',
        listGroup: [
            {
                id: 25,
                name: 'Dashboard (Job Lists)',
                description: 'Dashboard (Job Lists)',
                slug: 'jobLists',
                urlFront: '/jobs/edit',
                urlBackend: '/positions/list'
            },
            {
                id: 26,
                name: 'Applicants',
                description: 'Applicants',
                slug: 'applicants',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/applicant/search/([a-z0-9]{25})'
            },
            {
                id: 27,
                name: 'Reports',
                description: 'Reports',
                slug: 'reports-info',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/jobs/$1/edit'
            },
            {
                id: 28,
                name: 'Referral',
                description: 'Referral',
                slug: 'referral',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/referral-campaigns/([a-z0-9]{25})/get-list'
            },
            {
                id: 29,
                name: 'Agenda',
                description: 'Agenda',
                slug: 'agenda',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/agenda/(filter-list-job|list)/([a-z0-9]{25})'
            },
            {
                id: 30,
                name: 'Resume Search',
                description: 'Resume Search',
                slug: 'resumeSearch',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/resume/folder/list/([a-z0-9]{25})'
            }
        ]
    },
    {
        name: 'Company',
        ref: 'company',
        listGroup: [
            {
                id: 31,
                name: 'General Info',
                description: 'General Info',
                slug: 'generalInfo',
                urlFront: '/jobs/edit',
                urlBackend: '/companies/(get-by-id|update)'
            },
            {
                id: 32,
                name: 'Manage Companies',
                description: 'Manage Companies',
                slug: 'manageCompanies',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/jobs/$1/edit'
            },
            {
                id: 33,
                name: 'Career Page',
                description: 'Career Page',
                slug: 'careerPage',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/career-site'
            },
            {
                id: 34,
                name: 'Team Member',
                description: 'Team Member',
                slug: 'teamMember',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/companies/members/([a-z0-9]{25})'
            },
            {
                id: 35,
                name: 'Hiring Stages',
                description: 'Hiring Stages',
                slug: 'hiringStages',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/companies/hiring-pipeline'
            },
            {
                id: 36,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklist',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/blacklist'
            }
        ]
    },
    {
        name: 'Templates',
        ref: 'templates',
        listGroup: [
            {
                id: 37,
                name: 'Email',
                description: 'Email',
                slug: 'email',
                urlFront: '/jobs/edit',
                urlBackend: '/recruiting'
            },
            {
                id: 38,
                name: 'Pre Assessment',
                description: 'Pre Assessment',
                slug: 'preAssessment',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/preassessments-companies'
            },
            {
                id: 39,
                name: 'Basic Assessment',
                description: 'Basic Assessment',
                slug: 'basicAssessment',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/preassessments'
            },
            {
                id: 40,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewForm',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/interview-forms'
            },
            {
                id: 41,
                name: 'Feedback Form (Candidate Experience)',
                description: 'Feedback Form (Candidate Experience)',
                slug: 'Feedback Form',
                urlFront: '/jobs/edit/$1/hiring-team',
                urlBackend: '/applicants/(link|links)/(render|track|submit-message|create|send|set-comment-timeline|revoke)'
            }
        ]
    },
    {
        name: 'Payment',
        ref: 'payment',
        listGroup: [
            {
                id: 42,
                name: 'Subscription and Coin',
                description: 'Subscription and Coin',
                slug: 'subscriptionAndCoin',
                urlFront: '/account/subscription-plan',
                urlBackend: '/payments'
            },
            {
                id: 43,
                name: 'Billing Info',
                description: 'Billing Info',
                slug: 'billingInfo',
                urlFront: '/account/billing',
                urlBackend: '/billings/(get|create)'
            },
            {
                id: 44,
                name: 'Billing History',
                description: 'Billing History',
                slug: 'billingHistory',
                urlFront: '/jobs/edit/$1/pre-assessment',
                urlBackend: '/billings/histories'
            },
            {
                id: 45,
                name: 'Coin History',
                description: 'Coin History',
                slug: 'coinHistory',
                urlFront: '/account/coin-history',
                urlBackend: '/resume/credit/histories/([a-z0-9]{25})'
            }
        ]
    },
    {
        name: 'Integration',
        ref: 'integration',
        listGroup: [
            {
                id: 46,
                name: 'UH Job Widget',
                description: 'UH Job Widget',
                slug: 'uhJobWidget',
                urlFront: '/jobs/edit',
                urlBackend: ''
            },
            {
                id: 47,
                name: 'HRIS',
                description: 'HRIS',
                slug: 'hris',
                urlFront: '/account/integration',
                urlBackend: '/integrations/(gadjian|talenta)/save-secret-key'
            }
        ]
    },
    {
        name: 'Manage User',
        ref: 'manageUser',
        listGroup: [
            {
                id: 48,
                name: 'Invite New User',
                description: 'Invite New User',
                slug: 'inviteNewUser',
                urlFront: '/jobs/edit',
                urlBackend: '/members/invitation'
            },
            {
                id: 49,
                name: 'User Group',
                description: 'CRUD user group',
                slug: 'UserGroup',
                urlFront: '/jobs/edit/$1/application-form',
                urlBackend: '/users-group'
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
        },
        {
            id: 7,
            access: true
        },
        {
            id: 8,
            access: true
        },
        {
            id: 9,
            access: true
        },
        {
            id: 10,
            access: true
        },
        {
            id: 11,
            access: true
        },
        {
            id: 12,
            access: true
        },
        {
            id: 13,
            access: true
        },
        {
            id: 14,
            access: true
        },
        {
            id: 15,
            access: true
        },
        {
            id: 16,
            access: true
        },
        {
            id: 17,
            access: true
        },
        {
            id: 18,
            access: true
        },
        {
            id: 19,
            access: true
        },
        {
            id: 20,
            access: true
        },
        {
            id: 21,
            access: true
        },
        {
            id: 22,
            access: true
        },
        {
            id: 23,
            access: true
        },
        {
            id: 24,
            access: true
        },
        {
            id: 25,
            access: true
        },
        {
            id: 26,
            access: true
        },
        {
            id: 27,
            access: true
        },
        {
            id: 28,
            access: true
        },
        {
            id: 29,
            access: true
        },
        {
            id: 30,
            access: true
        },
        {
            id: 31,
            access: true
        },
        {
            id: 32,
            access: true
        },
        {
            id: 33,
            access: true
        },
        {
            id: 34,
            access: true
        },
        {
            id: 35,
            access: true
        },
        {
            id: 36,
            access: true
        },
        {
            id: 37,
            access: true
        },
        {
            id: 38,
            access: true
        },
        {
            id: 39,
            access: true
        },
        {
            id: 40,
            access: true
        },
        {
            id: 41,
            access: true
        },
        {
            id: 42,
            access: true
        },
        {
            id: 43,
            access: true
        },
        {
            id: 44,
            access: true
        },
        {
            id: 45,
            access: true
        },
        {
            id: 46,
            access: true
        },
        {
            id: 47,
            access: true
        },
        {
            id: 48,
            access: true
        },
        {
            id: 49,
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
        },
        {
            id: 7,
            access: true
        },
        {
            id: 8,
            access: true
        },
        {
            id: 9,
            access: true
        },
        {
            id: 10,
            access: true
        },
        {
            id: 11,
            access: true
        },
        {
            id: 12,
            access: true
        },
        {
            id: 13,
            access: true
        },
        {
            id: 14,
            access: true
        },
        {
            id: 15,
            access: true
        },
        {
            id: 16,
            access: true
        },
        {
            id: 17,
            access: true
        },
        {
            id: 18,
            access: true
        },
        {
            id: 19,
            access: true
        },
        {
            id: 20,
            access: true
        },
        {
            id: 21,
            access: true
        },
        {
            id: 22,
            access: true
        },
        {
            id: 23,
            access: true
        },
        {
            id: 24,
            access: true
        },
        {
            id: 25,
            access: true
        },
        {
            id: 26,
            access: true
        },
        {
            id: 27,
            access: true
        },
        {
            id: 28,
            access: true
        },
        {
            id: 29,
            access: true
        },
        {
            id: 30,
            access: true
        },
        {
            id: 31,
            access: true
        },
        {
            id: 32,
            access: true
        },
        {
            id: 33,
            access: true
        },
        {
            id: 34,
            access: true
        },
        {
            id: 35,
            access: true
        },
        {
            id: 36,
            access: true
        },
        {
            id: 37,
            access: true
        },
        {
            id: 38,
            access: true
        },
        {
            id: 39,
            access: true
        },
        {
            id: 40,
            access: true
        },
        {
            id: 41,
            access: true
        },
        {
            id: 42,
            access: true
        },
        {
            id: 43,
            access: true
        },
        {
            id: 44,
            access: true
        },
        {
            id: 45,
            access: true
        },
        {
            id: 46,
            access: true
        },
        {
            id: 47,
            access: true
        },
        {
            id: 48,
            access: true
        },
        {
            id: 49,
            access: true
        }
    ]
  }
}
