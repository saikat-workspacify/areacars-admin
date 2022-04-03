import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../views/pages/DashboardPage.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'dashboard',
         component: DashboardPage
      },
      {
         path: '/reservation',
         name: 'reservation',
         component: () => import('../views/pages/ReservationPage.vue')
      }
   ]
})

export default router
