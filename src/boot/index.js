import { Route } from '../lib'

async function initUser({ router, useUser }) {
  const userStore = useUser()

  await Promise.all([
    userStore.initAuthorization(),
    router.isReady(),
  ])

  if (userStore.isAuthorized && router.currentRoute.value.path === '/') {
    return router.push({ name: Route.APP_LIST })
  }

  if (!userStore.isAuthorized) {
    return router.push({ name: Route.WELCOME })
  }

  return undefined
}

export default function boot({ router, useUser }) {
  return Promise.all([
    initUser({ router, useUser }),
  ])
}
