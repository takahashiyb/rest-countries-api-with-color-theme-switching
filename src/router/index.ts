import DesignSystem from '@/design-system/DesignSystem.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/design-system', component: DesignSystem },
    { path: '/', component: HomePage },
  ],
})

export default router
