import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.scss'

createApp(App).use(router).mount('#app')
