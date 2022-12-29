import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// // 注册全局组件
// import Tree from '@/components/Tree.vue'

import './assets/main.css'

const app = createApp(App)

// // 注册全局组件
// app.component('MyTree', Tree)
app.use(createPinia())
app.use(router)

app.mount('#app')
