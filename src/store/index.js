import { createPinia } from 'pinia'
import useUser from './user'

const store = createPinia()

export {
  store,
  useUser,
}
