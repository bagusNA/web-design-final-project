import { createRouter, createWebHistory } from 'vue-router'
import layoutMiddleware from '@/router/middlewares/layout-middleware.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/pages/Landing.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/pages/Contact.vue')
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('@/pages/Landing.vue'),
      meta: {
        layout: 'AppLayout',
      }
    },
  ],
})

router.beforeEach(layoutMiddleware)

export default router
