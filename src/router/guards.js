import { useUser } from '../store'

export const GuardName = Object.freeze({
  AUTH: Symbol('guard:auth'),
})

function authGuard(to) {
  if (!to.meta.guards?.includes(GuardName.AUTH)) {
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

export const RouteGuards = [
  authGuard,
]
