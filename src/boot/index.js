function initUser({ useUser }) {
  const userStore = useUser()

  return userStore.initAuthorization()
}

export default function boot({ router, useUser }) {
  return Promise.all([
    initUser({ router, useUser }),
  ])
}
