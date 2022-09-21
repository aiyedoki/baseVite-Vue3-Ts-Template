import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from "./language"
import pinia from './stores'

import './styles/main.scss'
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
