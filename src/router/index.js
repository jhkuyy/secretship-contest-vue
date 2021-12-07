import { createRouter, createWebHistory } from 'vue-router'
import { Routes, routes } from './routes'
import { RouteGuards, GuardName } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

RouteGuards.forEach(router.beforeEach)

export {
  GuardName,
  router,
  Routes,
}
