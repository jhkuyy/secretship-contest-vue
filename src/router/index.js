import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import guards from './guards'

function createRouter() {
  const router = _createRouter({
    history: createWebHistory(),
    routes,
  })

  guards.forEach(router.beforeEach)

  return router
}

export {
  // eslint-disable-next-line import/prefer-default-export
  createRouter,
}
