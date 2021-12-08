import { useUser } from '../store'
import { Route } from '../lib'
import RouteGuard from './RouteGuard'

function createGuard(name, callback) {
  return (to, from, next) => {
    if (!to.meta.guards?.includes(name)) {
      return next()
    }

    return callback({ to, from, next })
  }
}

const authGuard = createGuard(RouteGuard.AUTH, ({ next }) => {
  const store = useUser()

  if (!store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('Auth guard failed')

    return next({ name: Route.WELCOME })
  }

  return next()
})

const noAuthGuard = createGuard(RouteGuard.NO_AUTH, ({ next }) => {
  const store = useUser()

  if (store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('No auth guard failed')

    return next({ name: Route.APP_LIST })
  }

  return next()
})

export default [
  authGuard,
  noAuthGuard,
]
