import LocalStorageAdapter from './adapters/LocalStorageAdapter'

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

  remove(key) {
    this.#adapter.remove(key)
  }
}

const adapter = new LocalStorageAdapter('APP_STORAGE')

export default new AppStorage(adapter)
