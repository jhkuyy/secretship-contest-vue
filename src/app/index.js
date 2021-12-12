import { createApp as _createApp } from 'vue'
import { createRouter } from '../router'
import { createStore } from '../stores'
import { createI18n } from '../i18n'
import App from '../App.vue'

export default function createApp() {
  const router = createRouter()
  const store = createStore()
  const i18n = createI18n()

  const app = _createApp(App)
    .use(router)
    .use(store)
    .use(i18n)

  return {
    app,
    router,
    store,
  }
}
