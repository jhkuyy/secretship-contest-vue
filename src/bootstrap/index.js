import { useUser } from '../store'
import { router, Routes } from '../router'

// eslint-disable-next-line import/prefer-default-export
export async function initUser() {
  const userStore = useUser()

  await userStore.initAuthorization()

  const name = userStore.isAuthorized
    ? Routes.APP_LIST
    : Routes.WELCOME

  await router.replace({ name })
}
