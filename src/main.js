import createApp from './app'
import boot from './bootstrap'
import { useUser } from './store'

(async () => {
  const { app, router } = createApp()

  await boot({ router, useUser })

  app.mount('#app')
})()
