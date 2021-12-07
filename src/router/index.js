import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import beforeRouteGuards from './guards'
import { Routes } from './enums'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

beforeRouteGuards.forEach(router.beforeEach)

export {
  router,
  Routes,
}
