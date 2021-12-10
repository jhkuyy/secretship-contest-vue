import appStorage from './AppStorage'

class ApiClient {
  #STORAGE_KEY = 'apps'

  async fetchApps() {
    const apps = appStorage.get(this.#STORAGE_KEY) ?? []

    return Promise.resolve(apps)
  }

  async addApp(app) {
    const apps = await this.fetchApps()

    const newApp = {
      id: apps.length + 1,
      ...app,
    }

    appStorage.set(
      this.#STORAGE_KEY,
      [
        ...apps,
        newApp,
      ],
    )

    return Promise.resolve(newApp)
  }

  async removeApp(id) {
    const apps = await this.fetchApps()

    const index = apps.findIndex((app) => app.id === id)

    if (index === -1) {
      return Promise.reject()
    }

    appStorage.set(
      this.#STORAGE_KEY,
      [
        ...apps.slice(0, index),
        ...apps.slice(index + 1),
      ],
    )

    return Promise.resolve(id)
  }

  async editApp(editedApp) {
    const apps = await this.fetchApps()

    const index = apps.findIndex((app) => app.id === editedApp.id)

    if (index === -1) {
      return Promise.reject()
    }

    appStorage.set(
      this.#STORAGE_KEY,
      [
        ...apps.slice(0, index),
        ...apps.slice(index + 1),
      ],
    )

    return Promise.resolve(editedApp)
  }
}

export default new ApiClient()
