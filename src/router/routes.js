import { GuardName } from './guards'

export const Routes = Object.freeze({
  WELCOME: 'route:home',
  APP_ADD: 'route:app-add',
  APP_DETAILS: 'route:app-details',
  APP_LIST: 'route:app-list',
  PROFILE_EDIT: 'route:profile-edit',
  NOT_FOUND: 'route:not-found',
})

export const routes = [
  {
    name: Routes.WELCOME,
    path: '/',
    component: () => import('../views/WelcomeScreen.vue'),
    meta: {
      guards: [GuardName.NO_AUTH],
    },
  },
  {
    name: Routes.APP_ADD,
    path: '/app-add',
    component: () => import('../views/AppAdd.vue'),
    meta: {
      guards: [GuardName.AUTH],
    },
  },
  {
    name: Routes.APP_DETAILS,
    path: '/app-details',
    component: () => import('../views/AppDetails.vue'),
    meta: {
      guards: [GuardName.AUTH],
    },
  },
  {
    name: Routes.APP_LIST,
    path: '/app-list',
    component: () => import('../views/AppList.vue'),
    meta: {
      guards: [GuardName.AUTH],
    },
  },
  {
    name: Routes.PROFILE_EDIT,
    path: '/profile-edit',
    component: () => import('../views/ProfileEdit.vue'),
    meta: {
      guards: [GuardName.AUTH],
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
]
