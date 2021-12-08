import createApp from './app'
import boot from './bootstrap'
import { useUser } from './store'

import './styles/base.styl'
import './styles/bootstrap.scss'

(async () => {
  const { app, router } = createApp()

  await boot({ router, useUser })

  app.mount('#app')
})()
