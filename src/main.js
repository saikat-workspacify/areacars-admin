import { createApp } from 'vue'
import { createPinia } from 'pinia'

import globalComponents from '@/plugins/globalComponents.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/styles/base.scss"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(globalComponents)

app.mount('#app')
