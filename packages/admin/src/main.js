import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

import './styles/global.less'
import App from './App.vue'
import { router } from './router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'medium', zIndex: 2000 })
app.mount('#app')
