import { createRouter } from '../router'
import { createStore } from '../store'
import App from './App.vue'

export default function createApp() {
  const router = createRouter()
  const store = createStore()

  const app = createApp(App)
    .use(router)
    .use(store)

  return {
    app,
    router,
    store,
  }
}
