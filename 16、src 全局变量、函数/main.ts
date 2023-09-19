import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
// // 注册全局组件
// import Tree from '@/components/Tree.vue'
import './assets/main.css'

declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt,
    $env: string,
    $filter: Filter
  }
}
type Filter = {
  format<T>(str: T):string
}

const app = createApp(App)
const Mitt = mitt()

// // 注册全局组件
// app.component('MyTree', Tree)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

// v3没有了prototype定义全局变量/函数，利用config.globalProperties定义全局变量/函数，定义的变量在template中直接使用，在script中const app = getCurrentInstance()； app?.proxy.变量/函数
app.config.globalProperties.$Bus = Mitt
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filter = {
  'format'<T> (str: T) {
    return `参数${str}`
  } 
}

app.mount('#app')
