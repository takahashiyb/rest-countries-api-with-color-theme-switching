import DesignSystem from '@/design-system/DesignSystem.vue'
import CountryPage from '@/pages/CountryPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useStoreData } from '@/stores/data'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/design-system', component: DesignSystem },
    { path: '/', component: HomePage },
    {
      path: '/country/',
      component: CountryPage,
      beforeEnter: (to, from, next) => {
        if (!to.query.name) {
          next({ path: '/' })
        } else {
          next()
        }
      },
    },
  ],
})

router.beforeResolve(async (to, from) => {
  const store = useStoreData()
  if (!store.typedData) {
    await store.loadData()
  }
  console.log('Navigating to:', to.fullPath)
  return true
})

export default router
