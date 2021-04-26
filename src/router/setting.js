export default [
    {
        path: '/setting',
        name: 'Setting',
        meta: {
            topNav: true,
            icon: 'h-icon-setting',
            key: 'Setting',
            title: '设 置'
        }
    },
    {
        path: '/setting/user',
        name: 'Setting:User',
        component: () => import('../views/setting/User.vue'),
        meta: {
            parent: 'Setting',
            icon: 'h-icon-user',
            key: 'Setting:User',
            title: '用 户'
        }
    },
    {
        path: '/setting/role',
        name: 'Setting:Role',
        component: () => import('../views/setting/Role.vue'),
        meta: {
            parent: 'Setting',
            icon: 'h-icon-users',
            key: 'Setting:Role',
            title: '角 色'
        }
    }
]