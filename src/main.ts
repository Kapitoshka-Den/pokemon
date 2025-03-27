import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './core/router/router'
import { createPinia } from 'pinia'
import Markdown from 'vue3-markdown-it'

const pinia = createPinia()

createApp(App).use(router).use(Markdown).use(pinia).mount('#app')
