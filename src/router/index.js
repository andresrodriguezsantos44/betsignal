import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        }
      ]
    },
    {
      path: '/legal-terms',
      redirect: '/privacy-policy',
      component: () => import('../layouts/LegalTermsLayout.vue'),
      children: [
        {
          path: '/privacy-policy',
          name: 'privacyPolicy',
          component: () => import('../views/PrivacyPolicyView.vue')
        },
        {
          path: '/terms-conditions',
          name: 'termsConditions',
          component: () => import('../views/TermsConditionsView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
