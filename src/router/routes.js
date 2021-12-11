import { Route, RouteMeta } from '../lib'
import RouteGuard from './RouteGuard'

export default [
  {
    name: Route.WELCOME,
    path: '/',
    component: () => import('../views/WelcomeScreen.vue'),
  },
  {
    path: '/',
    component: () => import('../views/ApplicationLayout/ApplicationLayout.vue'),
    children: [
      {
        name: Route.APP_LIST,
        path: 'apps',
        component: () => import('../views/App/AppList.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
          [RouteMeta.HIDE_HEADER_BORDER]: true,
        },
      },
      {
        name: Route.APP_ADD,
        path: 'apps/add',
        component: () => import('../views/App/AppAdd.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
        },
      },
      {
        path: 'apps/:id',
        component: () => import('../views/App/AppDetails/AppDetailsLayout.vue'),
        children: [
          {
            name: Route.APP_DETAILS_WALLET,
            path: '',
            component: () => import('../views/App/AppDetails/AppDetailsWallet.vue'),
            meta: {
              guards: [RouteGuard.AUTH],
            },
          },
          {
            name: Route.APP_DETAILS_USERS,
            path: 'users',
            component: () => import('../views/App/AppDetails/AppDetailsUsers.vue'),
            meta: {
              guards: [RouteGuard.AUTH],
            },
          },
          {
            name: Route.APP_DETAILS_SETTINGS,
            path: 'settings',
            component: () => import('../views/App/AppDetails/AppDetailsSettings.vue'),
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
        name: Route.HELP,
        path: '/help',
        component: () => import('../views/HelpScreen.vue'),
        meta: {
          guards: [RouteGuard.AUTH],
        },
      },
    ],
  },
  {
    path: '/d',
    component: () => import('../views/PlayGround.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
