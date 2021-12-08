class LocalStorageAdapter {
  #prefix

  constructor(prefix) {
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

    return item
      ? JSON.parse(item)
      : undefined
  }

  set(key, value) {
    window.localStorage.setItem(this.#getKey(key), JSON.stringify(value))
  }

  remove(key) {
    window.localStorage.removeItem(this.#getKey(key))
  }
}

export default LocalStorageAdapter
