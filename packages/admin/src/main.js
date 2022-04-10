import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/global.less'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'medium', zIndex: 2000 })
app.mount('#app')
