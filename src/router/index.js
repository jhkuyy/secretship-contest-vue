import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import beforeRouteGuards from './guards'
import { Routes } from './enums'

function createRouter() {
  const router = _createRouter({
    history: createWebHistory(),
    routes,
  })

  beforeRouteGuards.forEach(router.beforeEach)

  return router
}

export {
  createRouter,
  Routes,
}
