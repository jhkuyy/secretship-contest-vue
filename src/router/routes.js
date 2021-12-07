import { Guards, Routes } from './enums'

export default [
  {
    name: Routes.WELCOME,
    path: '/',
    component: () => import('../views/WelcomeScreen.vue'),
    meta: {
      guards: [Guards.NO_AUTH],
    },
  },
  {
    path: '/apps',
    component: () => import('../views/App/AppLayout.vue'),
    children: [
      {
        name: Routes.APP_LIST,
        path: '',
        component: () => import('../views/App/AppList.vue'),
        meta: {
          guards: [Guards.AUTH],
        },
      },
      {
        name: Routes.APP_ADD,
        path: 'add',
        component: () => import('../views/App/AppAdd.vue'),
        meta: {
          guards: [Guards.AUTH],
        },
      },
      {
        name: Routes.APP_DETAILS,
        path: 'details/:id',
        component: () => import('../views/App/AppDetails.vue'),
        meta: {
          guards: [Guards.AUTH],
        },
      },
    ],
  },
  {
    name: Routes.PROFILE_EDIT,
    path: '/profile-edit',
    component: () => import('../views/ProfileEdit.vue'),
    meta: {
      guards: [Guards.AUTH],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
]
