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
      component: () => import('../views/common/AuthorizationView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/RegistrationView.vue')
    },
    {
      path: '/develop',
      name: 'develop',
      component: () => import('../views/InDevelopView.vue')
    },
    {
      path: '/organization/profile',
      name: 'profile',
      component: () => import('../views/organisation/MyProfileView.vue')
    },
    {
      path: '/organisation/cases',
      name: 'organisation-cases',
      component: () => import('../views/organisation/CasesView.vue')
    },
    {
      path: '/organisation/case-:id',
      name: 'case',
      component: () => import('../views/organisation/CaseView.vue')
    },
    {
      path: '/organisation/case-:id/solution-:id',
      name: 'case-solution',
      component: () => import('../views/organisation/OrganisationCaseSolutionView.vue')
    },
    {
      path: '/organisation/new-case',
      name: 'add-case',
      component: () => import('../views/organisation/AddCaseView.vue')
    },
    {
      path: '/ui-kit',
      name: 'ui-kit',
      component: () => import('../views/UiKitView.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/common/cases/CasesView.vue')
    },
    {
      path: '/case-:id',
      name: 'case',
      component: () => import('../views/common/cases/CommonCaseView.vue')
    }
  ]
})

export default router
