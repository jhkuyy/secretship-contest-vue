import { useUser } from '../store'
import { Guards, Routes } from './enums'

function createGuard(name, callback) {
  return (to, from, next) => {
    if (!to.meta.guards?.includes(name)) {
      return next()
    }

    return callback({ to, from, next })
  }
}

const authGuard = createGuard(Guards.AUTH, ({ next }) => {
  const store = useUser()

  if (!store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('Auth guard failed')

    return next({ name: Routes.WELCOME })
  }

  return next()
})

const noAuthGuard = createGuard(Guards.NO_AUTH, ({ next }) => {
  const store = useUser()

  if (store.isAuthorized) {
    // eslint-disable-next-line no-console
    console.error('No auth guard failed')

    return next({ name: Routes.APP_LIST })
  }

  return next()
})

export default [
  authGuard,
  noAuthGuard,
]
