import { createApp } from 'vue'
import App from './App'
import { store } from './store'

import './styles/bootstrap.scss'

createApp(App)
  .use(store)
  .mount('#app')
