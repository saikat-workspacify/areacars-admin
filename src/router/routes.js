import DashboardPage from '../views/pages/DashboardPage.vue'

export default [
   {
      path: '/',
      name: 'dashboard',
      component: DashboardPage
   },
   {
      path: '/reservation',
      name: 'reservation',
      component: () => import('../views/pages/ReservationPage.vue')
   },
   {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/pages/SettingsPage.vue')
   }
]
