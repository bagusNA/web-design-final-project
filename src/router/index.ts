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
      path: '/templates',
      name: 'templates',
      component: () => import('@/pages/Templates.vue')
    },
    {
      path: '/app',
      name: 'app.home',
      component: () => import('@/pages/MyResume.vue'),
      meta: {
        layout: 'AppLayout',
      }
    },
    {
      path: '/app/editor',
      name: 'app.editor',
      component: () => import('@/pages/Editor.vue'),
      meta: {
        layout: 'EditorLayout',
      }
    },
  ],
})

router.beforeEach(layoutMiddleware)

export default router
