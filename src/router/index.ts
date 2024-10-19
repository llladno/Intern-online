import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizationView from '@/views/common/AuthorizationView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import InDevelopView from '@/views/InDevelopView.vue'
import MyProfileView from '@/views/organization/MyProfileView.vue'
import CaseView from '@/views/organization/CaseView.vue'

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
      component: AuthorizationView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/develop',
      name: 'develop',
      component: InDevelopView
    },
    {
      path: '/organization/profile',
      name: 'organization-profile',
      component: MyProfileView
    },
    {
      path: '/organization/cases',
      name: 'organization-cases',
      component: () => import('../views/organization/CasesView.vue')
    },
    {
      path: '/organization/case-:id',
      name: 'organization-case',
      component: CaseView
    },
    {
      path: '/organization/case-:id/solution-:id',
      name: 'case-solution',
      component: () => import('../views/organization/OrganizationCaseSolutionView.vue')
    },
    {
      path: '/organization/new-case',
      name: 'add-case',
      component: () => import('../views/organization/AddCaseView.vue')
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
