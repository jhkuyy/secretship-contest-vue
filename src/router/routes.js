import { Route } from '../lib'
import RouteGuard from './RouteGuard'

export default [
  {
    name: Route.WELCOME,
    path: '/',
    component: () => import('../views/WelcomeScreen.vue'),
    meta: {
      guards: [RouteGuard.NO_AUTH],
    },
  },
  {
    path: '/apps',
    component: () => import('../views/App/AppLayout.vue'),
    children: [
      {
        name: Route.APP_LIST,
        path: '',
        component: () => import('../views/App/AppList.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
        },
      },
      {
        name: Route.APP_ADD,
        path: 'add',
        component: () => import('../views/App/AppAdd.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
        },
      },
      {
        name: Route.APP_DETAILS,
        path: 'details/:id',
        component: () => import('../views/App/AppDetails.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
        },
      },
    ],
  },
  {
    name: Route.PROFILE_EDIT,
    path: '/profile-edit',
    component: () => import('../views/ProfileEdit.vue'),
    meta: {
      guards: [RouteGuard.AUTH],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
]
