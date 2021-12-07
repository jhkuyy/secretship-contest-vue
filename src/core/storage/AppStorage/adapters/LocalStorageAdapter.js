class LocalStorageAdapter {
  #prefix

  constructor(prefix = 'APP_STORAGE') {
    if (!('localStorage' in window)) {
      throw new Error('LocalStorageAdapter not supported')
    }

    this.#prefix = prefix
  }

  #getKey(key) {
    return `${this.#prefix}:${key}`
  }

  get(key) {
    const item = window.localStorage.getItem(this.#getKey(key))

    return JSON.parse(item)
  }

  set(key, value) {
    window.localStorage.setItem(this.#getKey(key), JSON.stringify(value))
  }
}

export default new LocalStorageAdapter()
