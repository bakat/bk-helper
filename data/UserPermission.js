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
                urlFrontend: '/jobs/create',
                urlBackend: '/position/(create|update|clone|close|archive|unarchive|delete|remove)/'
            },
            {
                id: 2,
                name: 'Publish Job',
                description: 'Publish Job',
                slug: 'publishJob',
                urlFrontend: '/jobs/(:mongoId)/edit',
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
                urlFrontend: '/jobs/(:mongoId)/edit',
                urlBackend: '/position/get-by-id/(:mongoId)'
            },
            {
                id: 4,
                name: 'Application Form',
                description: 'Application Form',
                slug: 'ApplicationForm',
                urlFrontend: '/jobs/edit/(:mongoId)/application-form',
                urlBackend: '/application-form/upsert'
            },
            {
                id: 5,
                name: 'Pre-Assessment',
                description: 'Pre Assessment Test',
                slug: 'PreAssessment',
                urlFrontend: '/jobs/edit/(:mongoId)/pre-assessment',
                urlBackend: '/preassessments'
            },
            {
                id: 6,
                name: 'Hiring Team',
                description: 'Hiring Team',
                slug: 'HiringTeam',
                urlFrontend: '/jobs/edit/(:mongoId)/hiring-team',
                urlBackend: '/companies/members/(:mongoId)'
            },
            {
                id: 50,
                name: 'Hiring Stages',
                description: 'Hiring Stages',
                slug: 'hiringStagesMenu',
                urlFrontend: '/jobs/edit/(:mongoId)/hiring-stage',
                urlBackend: '/companies/members/(:mongoId)'
            },
            {
                id: 51,
                name: 'Clone Job',
                description: 'Clone Job',
                slug: 'cloneJob',
                urlFrontend: '',
                urlBackend: '/companies/members/(:mongoId)'
            },
            {
                id: 52,
                name: 'Close Job',
                description: 'Close Job',
                slug: 'closeJob',
                urlFrontend: '',
                urlBackend: '/companies/members/(:mongoId)'
            },
            {
                id: 53,
                name: 'Advertise Job',
                description: 'Advertise Job',
                slug: 'advertiseJob',
                urlFrontend: '/jobs/edit/(:mongoId)/advertise-job',
                urlBackend: '/companies/members/(:mongoId)'
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
                urlFrontend: '',
                urlBackend: '/applicants/email/send'
            },
            {
                id: 8,
                name: 'Set Schedule',
                description: 'Set Schedule',
                slug: 'setSchedule',
                urlFrontend: '',
                urlBackend: '/applicants/set-schedule'
            },
            {
                id: 9,
                name: 'Add Comment',
                description: 'Add Comment',
                slug: 'addComment',
                urlFrontend: '',
                urlBackend: '/applicants/comment'
            },
            {
                id: 10,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewForm',
                urlFrontend: '',
                urlBackend: '/interview-forms'
            },
            {
                id: 11,
                name: 'Assessment',
                description: 'Assessment',
                slug: 'Assessment',
                urlFrontend: '',
                urlBackend: '/(cut-e|assessments)/send-assessment'
            },
            {
                id: 12,
                name: 'Consideration',
                description: 'Consideration',
                slug: 'consideration',
                urlFrontend: '',
                urlBackend: '/jobs/(:mongoId)/edit'
            },
            {
                id: 13,
                name: 'Manage Applicant',
                description: 'Manage Applicant',
                slug: 'manageApplicant',
                urlFrontend: '',
                urlBackend: '/applicants/update'
            },
            {
                id: 14,
                name: 'Request Feedback',
                description: 'Request Feedback',
                slug: 'requestFeedback',
                urlFrontend: '',
                urlBackend: '/request-feedback-applicant/(:mongoId)/send-invitation'
            },
            {
                id: 15,
                name: 'Evaluation',
                description: 'Evaluation',
                slug: 'evaluation',
                urlFrontend: '',
                urlBackend: '/event/submit-custom-evaluation'
            },
            {
                id: 16,
                name: 'Duplicate Applicant',
                description: 'Duplicate Applicant',
                slug: 'duplicateApplicant',
                urlFrontend: '',
                urlBackend: '/positions/assign-new-position'
            },
            {
                id: 17,
                name: 'Delete Applicant',
                description: 'Delete Applicant',
                slug: 'deleteApplicant',
                urlFrontend: '',
                urlBackend: '/applicants/remove'
            },
            {
                id: 18,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklist',
                urlFrontend: '',
                urlBackend: '/blacklist/(:mongoId)/(add|update|get|post-excel|set-applicant)'
            },
            {
                id: 19,
                name: 'Add Applicant',
                description: 'Add Applicant',
                slug: 'addApplicant',
                urlFrontend: '',
                urlBackend: '/positions/(:mongoId)/sourced'
            },
            {
                id: 20,
                name: 'Move Applicant',
                description: 'Move Applicant',
                slug: 'moveApplicant',
                urlFrontend: '',
                urlBackend: '/applicants/(:mongoId)/move'
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
                urlFrontend: '',
                urlBackend: '/applicants/(:mongoId)'
            },
            {
                id: 22,
                name: 'Timeline',
                description: 'Timeline',
                slug: 'timeline',
                urlFrontend: '',
                urlBackend: '/applicants/activities/timeline/(:mongoId)/(:mongoId)'
            },
            {
                id: 23,
                name: 'Assessment Result',
                description: 'Assessment',
                slug: 'assessmentInfo',
                urlFrontend: '',
                urlBackend: '/jobs/(:mongoId)/edit'
            },
            {
                id: 24,
                name: 'Comments',
                description: 'Comments',
                slug: 'comments',
                urlFrontend: '',
                urlBackend: '/applicants/activities/note/(:mongoId)/(:mongoId)'
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
                urlFrontend: '/jobs/(:mongoId)/applicant',
                urlBackend: '/positions/list'
            },
            {
                id: 26,
                name: 'Applicants',
                description: 'Applicants',
                slug: 'applicants',
                urlFrontend: '/candidates',
                urlBackend: '/applicant/search/(:mongoId)'
            },
            {
                id: 27,
                name: 'Reports',
                description: 'Reports',
                slug: 'reportsInfo',
                urlFrontend: '/reports/',
                urlBackend: '/jobs/(:mongoId)/edit'
            },
            {
                id: 28,
                name: 'Referral',
                description: 'Referral',
                slug: 'referral',
                urlFrontend: '/referrals',
                urlBackend: '/referral-campaigns/(:mongoId)/get-list'
            },
            {
                id: 29,
                name: 'Agenda',
                description: 'Agenda',
                slug: 'agenda',
                urlFrontend: '/agendas',
                urlBackend: '/agenda/(filter-list-job|list)/(:mongoId)'
            },
            {
                id: 30,
                name: 'Resume Search',
                description: 'Resume Search',
                slug: 'resumeSearch',
                urlFrontend: '/resume',
                urlBackend: '/resume/folder/list/(:mongoId)'
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
                urlFrontend: '/account/company',
                urlBackend: '/companies/(get-by-id|update)'
            },
            {
                id: 32,
                name: 'Manage Companies',
                description: 'Manage Companies',
                slug: 'manageCompanies',
                urlFrontend: '/account/manage-companies',
                urlBackend: '/jobs/(:mongoId)/edit'
            },
            {
                id: 33,
                name: 'Career Page',
                description: 'Career Page',
                slug: 'careerPage',
                urlFrontend: '/jobs/edit/(:mongoId)/pre-assessment',
                urlBackend: '/career-site'
            },
            {
                id: 34,
                name: 'Team Member',
                description: 'Team Member',
                slug: 'teamMember',
                urlFrontend: '/account/account-member',
                urlBackend: '/companies/members/(:mongoId)'
            },
            {
                id: 35,
                name: 'Hiring Stages',
                description: 'Hiring Stages',
                slug: 'hiringStages',
                urlFrontend: '/account/hiring-plan',
                urlBackend: '/companies/hiring-pipeline'
            },
            {
                id: 36,
                name: 'Blacklist',
                description: 'Blacklist',
                slug: 'blacklistMenu',
                urlFrontend: '/account/blacklist-applicants',
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
                urlFrontend: '/account/recruiting',
                urlBackend: '/recruiting'
            },
            {
                id: 38,
                name: 'Pre Assessment',
                description: 'Pre Assessment',
                slug: 'preAssessmentTemplate',
                urlFrontend: '/account/preassessment-templates',
                urlBackend: '/preassessments-companies'
            },
            {
                id: 39,
                name: 'Basic Assessment',
                description: 'Basic Assessment',
                slug: 'basicAssessment',
                urlFrontend: '/account/basic-assessment-templates',
                urlBackend: '/preassessments'
            },
            {
                id: 40,
                name: 'Interview Form',
                description: 'Interview Form',
                slug: 'interviewFormTemplate',
                urlFrontend: '/account/template-interview-form',
                urlBackend: '/interview-forms'
            },
            {
                id: 41,
                name: 'Feedback Form (Candidate Experience)',
                description: 'Feedback Form (Candidate Experience)',
                slug: 'FeedbackForm',
                urlFrontend: '/account/feedback-form',
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
                urlFrontend: '/account/subscription-plan',
                urlBackend: '/payments'
            },
            {
                id: 43,
                name: 'Billing Info',
                description: 'Billing Info',
                slug: 'billingInfo',
                urlFrontend: '/account/billing',
                urlBackend: '/billings/(get|create)'
            },
            {
                id: 44,
                name: 'Billing History',
                description: 'Billing History',
                slug: 'billingHistory',
                urlFrontend: '/account/history',
                urlBackend: '/billings/histories'
            },
            {
                id: 45,
                name: 'Coin History',
                description: 'Coin History',
                slug: 'coinHistory',
                urlFrontend: '/account/coin-history',
                urlBackend: '/resume/credit/histories/(:mongoId)'
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
                urlFrontend: '/account/integration',
                urlBackend: ''
            },
            {
                id: 47,
                name: 'HRIS',
                description: 'HRIS',
                slug: 'hris',
                urlFrontend: '/account/integration',
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
                urlFrontend: '/account/user-role',
                urlBackend: '/members/invitation'
            },
            {
                id: 49,
                name: 'User Group',
                description: 'CRUD user group',
                slug: 'UserGroup',
                urlFrontend: '',
                urlBackend: '/users-group'
            },
            {
                id: 54,
                name: 'Edit User',
                description: 'Edit User',
                slug: 'EditUser',
                urlFrontend: '',
                urlBackend: '/users/update-profile-member'
            },
            {
                id: 55,
                name: 'Remove User',
                description: 'Remove User',
                slug: 'RemoveUser',
                urlFrontend: '',
                urlBackend: '/companies/members/remove/(:mongoId)'
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
        },
        {
            id: 50,
            access: true
        },
        {
            id: 51,
            access: true
        },
        {
            id: 52,
            access: true
        },
        {
            id: 53,
            access: true
        },
        {
            id: 54,
            access: true
        },
        {
            id: 55,
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
        },
        {
            id: 50,
            access: true
        },
        {
            id: 51,
            access: true
        },
        {
            id: 52,
            access: true
        },
        {
            id: 53,
            access: true
        },
        {
            id: 54,
            access: true
        },
        {
            id: 55,
            access: true
        }
    ]
  }
}
