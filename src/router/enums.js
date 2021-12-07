export const Guards = Object.freeze({
  AUTH: Symbol('guard:auth'),
  NO_AUTH: Symbol('guard:no-auth'),
})

export const Routes = Object.freeze({
  WELCOME: 'route:home',
  APP_ADD: 'route:app-add',
  APP_DETAILS: 'route:app-details',
  APP_LIST: 'route:app-list',
  PROFILE_EDIT: 'route:profile-edit',
  NOT_FOUND: 'route:not-found',
})
