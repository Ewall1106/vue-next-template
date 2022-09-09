import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

// if (process.env.NODE_ENV === 'development') {
// eslint-disable-next-line
const { mockXHR } = require('../mock')
mockXHR()
// }

createApp(App).use(router).mount('#app')
