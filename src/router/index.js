import { createRouter, createWebHistory } from 'vue-router'

import AppPage from '../components/AppPage.vue'
import PageSingle from '../components/PageSingle.vue'
import ErrorP from '../components/ErrPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppPage
    },
    {
      path: '/PageSingle',
      name: 'single',
      component: PageSingle
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ErrorP
    }
  ]
})

export default router
