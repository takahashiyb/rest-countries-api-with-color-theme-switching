import DesignSystem from '@/design-system/DesignSystem.vue'
import CountryPage from '@/pages/CountryPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/design-system', component: DesignSystem },
    { path: '/', component: HomePage },
    { path: '/country/', component: CountryPage },
  ],
})

export default router
