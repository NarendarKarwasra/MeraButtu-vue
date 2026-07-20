import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import ContactUsPage from '@/pages/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsPage,
    },
  ],
})

export default router
