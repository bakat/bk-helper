'use strict'

module.exports = {
  permission: [
    {
        id: 1,
        name: 'Create Job',
        description: 'Create New Job',
        slug: 'createJob',
        url: '/jobs/create'
    },
    {
        id: 2,
        name: 'Update Job',
        description: 'Update Job',
        slug: 'updateJob',
        url: '/jobs/$1/edit'
    },
    {
        id: 3,
        name: 'Reports',
        description: 'Reports Analytics',
        slug: 'reports',
        url: '/reports/*'
    }
  ],
  access: {
    FullAccess: [
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
        }
    ]
  }
}
