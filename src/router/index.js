import { createRouter, createWebHistory } from 'vue-router'
import { Routes, routes } from './routes'
import { beforeRouteGuards, GuardName } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

beforeRouteGuards.forEach(router.beforeEach)

export {
  GuardName,
  router,
  Routes,
}
