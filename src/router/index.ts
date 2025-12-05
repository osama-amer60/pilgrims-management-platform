import { createRouter, createWebHistory } from 'vue-router'

import { pilgrimsRoutes } from '@/modules/pilgrims/routes'
const router = createRouter({
  history: createWebHistory(),
  routes: [...pilgrimsRoutes],
})
export default router
