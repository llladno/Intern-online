import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AuthorizationView.vue')
    },
    {
      path: '/develop',
      name: 'develop',
      component: () => import('../views/InDevelopView.vue')
    },
    {
      path: '/organization-profile',
      name: 'profile',
      component: () => import('../views/organisation/MyProfileView.vue')
    },
    {
      path: '/my-cases',
      name: 'cases',
      component: () => import('../views/organisation/CasesView.vue')
    }
  ]
})

export default router
