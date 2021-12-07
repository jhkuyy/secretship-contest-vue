import { Routes } from '../router'

async function initUser({ router, useUser }) {
  const userStore = useUser()

  await userStore.initAuthorization()

  const name = userStore.isAuthorized
    ? Routes.APP_LIST
    : Routes.WELCOME

  await router.replace({ name })
}

export default function boot({ router, useUser }) {
  return Promise.all([
    initUser({ router, useUser }),
  ])
}
