import DesignSystem from '@/design-system/DesignSystem.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/design-system', component: DesignSystem }],
})

export default router
