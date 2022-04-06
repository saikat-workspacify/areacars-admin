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
      component: () => import('../views/pages/settings/index.vue')
   },
   {
      path: '/settings/general',
      name: 'general-settings',
      component: () => import('@/views/pages/settings/general.vue')
   },
   {
      path: '/settings/location',
      name: 'location-settings',
      component: () => import('@/views/pages/settings/location/index.vue')
   },
   {
      path: '/settings/location/add',
      name: 'add-location-settings',
      component: () => import('@/views/pages/settings/location/add.vue')
   },
   {
      path: '/settings/vehicle-data',
      name: 'vehicle-data-settings',
      component: () => import('@/views/pages/settings/vehicle-data/index.vue')
   }
]
