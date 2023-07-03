import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import useResizeGuoqin from 'use-resize-guoqin'
// // 注册全局组件
// import Tree from '@/components/Tree.vue'
import './assets/main.css'

declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
  }
}

const app = createApp(App)
const Mitt = mitt()

// // 注册全局组件
// app.component('MyTree', Tree)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 配合方法二 用全局指令
app.use(useResizeGuoqin)
app.config.globalProperties.$Bus = Mitt

app.mount('#app')
