import appStorage from '../AppStorage'

class ApiClient {
  #STORAGE_KEY = 'apps'

  async fetchApps() {
    const apps = appStorage.get(this.#STORAGE_KEY)

    return Promise.resolve(apps)
  }

  async addApp(app) {
    const apps = appStorage.get(this.#STORAGE_KEY) ?? []

    appStorage.set(this.#STORAGE_KEY, [...apps, app])

    return Promise.resolve(true)
  }

  async removeApp(id) {
    const apps = appStorage.get(this.#STORAGE_KEY) ?? []

    const index = apps.findIndex((app) => app.id === id)

    if (index !== -1) {
      apps.splice(index, 1)
      appStorage.set(this.#STORAGE_KEY, apps)
    }

    return Promise.resolve(true)
  }
}

export default new ApiClient()
