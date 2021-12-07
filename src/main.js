import { createApp } from 'vue'
import App from './App.vue'
import { initUser } from './bootstrap'
import { router } from './router'
import { store } from './store'

(async () => {
  const app = createApp(App)
    .use(router)
    .use(store)

  await Promise.all([
    initUser(),
  ])

  app.mount('#app')
})()
