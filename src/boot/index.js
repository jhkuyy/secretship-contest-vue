import { Route } from '../lib'

async function initUser({ router, useUser }) {
  const userStore = useUser()

  await userStore.initAuthorization()

  if (userStore.isAuthorized) {
    await router.push({ name: Route.APP_LIST })
  } else {
    await router.push({ name: Route.WELCOME })
  }
}

export default function boot({ router, useUser }) {
  return Promise.all([
    initUser({ router, useUser }),
  ])
}
