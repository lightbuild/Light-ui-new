import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router/router"
import './index.scss'
import './lib/light.scss'

createApp(App).use(router).mount('#app')
