import { useUser } from '../store'

export const GuardName = Object.freeze({
  AUTH: Symbol('guard:auth'),
  NO_AUTH: Symbol('guard:no-auth'),
})

function createGuard(name, callback) {
  return (to) => {
    if (!to.meta.guards?.includes(name)) {
      return true
    }

    return callback()
  }
}

const authGuard = createGuard(GuardName.AUTH, () => {
  const store = useUser()

  if (!store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('Auth guard failed')

    return '/'
  }

  return true
})

const noAuthGuard = createGuard(GuardName.NO_AUTH, () => {
  const store = useUser()

  if (store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('No auth guard failed')

    return '/apps'
  }

  return true
})

export const beforeRouteGuards = [
  authGuard,
  noAuthGuard,
]
