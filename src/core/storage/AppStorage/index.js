import localStorageAdapter from './adapters/LocalStorageAdapter'

class AppStorage {
  #adapter

  constructor(adapter) {
    this.#adapter = adapter
  }

  get(key) {
    return this.#adapter.get(key)
  }

  set(key, value) {
    this.#adapter.set(key, value)
  }
}

export default new AppStorage(localStorageAdapter)
