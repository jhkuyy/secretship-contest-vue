import { createPinia } from 'pinia'
import useUser from './user'

function createStore() {
  return createPinia()
}

export {
  createStore,
  useUser,
}
