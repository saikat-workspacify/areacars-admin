import { SetupCalendar } from 'v-calendar'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'

export default app => {
   app.use(SetupCalendar, {})

   app.component('default-layout', DefaultLayout)
}
