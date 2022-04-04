import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { SetupCalendar } from 'v-calendar'

import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/styles/base.scss"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(SetupCalendar, {})

app.mount('#app')
