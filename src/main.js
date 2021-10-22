import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import "./assets/css/tailwind.css"
import store from './store'
import naive from 'naive-ui'
const app = createApp(App)
app.use(store)
app.use(naive)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
