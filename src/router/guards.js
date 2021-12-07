import { useUser } from '../store'

export const GuardName = Object.freeze({
  AUTH: Symbol('guard:auth'),
  NO_AUTH: Symbol('guard:no-auth'),
})

function isGuardExists(to, guardName) {
  return to.meta.guards?.includes(guardName)
}

function authGuard(to) {
  if (!isGuardExists(to, GuardName.AUTH)) {
    return true
  }

  const store = useUser()

  if (!store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('Auth guard failed')

    return '/'
  }

  return true
}

function noAuthGuard(to) {
  if (!isGuardExists(to, GuardName.NO_AUTH)) {
    return true
  }

  const store = useUser()

  if (store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('No auth guard failed')

    return '/apps'
  }

  return true
}

export const beforeRouteGuards = [
  authGuard,
  noAuthGuard,
]
