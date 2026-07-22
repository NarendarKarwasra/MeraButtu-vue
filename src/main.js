import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import './assets/styles/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { reveal } from './stores/reveal'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('reveal', reveal)

app.mount('#app')
