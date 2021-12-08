import { Route } from '../lib'

async function initUser({ router, useUser }) {
  const userStore = useUser()

  await userStore.initAuthorization()

  const name = userStore.isAuthorized
    ? Route.APP_LIST
    : Route.WELCOME

  await router.replace({ name })
}

export default function boot({ router, useUser }) {
  return Promise.all([
    initUser({ router, useUser }),
  ])
}
