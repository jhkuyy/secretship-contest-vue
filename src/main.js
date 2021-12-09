import createApp from './app'
import boot from './boot'
import { useUser } from './store'

import './styles/bootstrap.scss'
import './styles/base.styl'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'

(async () => {
  const { app, router } = createApp()

  await boot({ router, useUser })

  app.mount('#app')
})()
