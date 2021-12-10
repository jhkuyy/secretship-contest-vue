function initUser({ useUser }) {
  const userStore = useUser()

  return userStore.initAuthorization()
}

export default function boot({ useUser }) {
  return Promise.all([
    initUser({ useUser }),
  ])
}
