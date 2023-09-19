import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// 全局组件/封装插件
import Loading from './components/Loading'

type Lod = {
  show: ()=> void,
  hide: ()=> void,
}
declare module "vue" {
  export interface ComponentCustomProperties {
    $guoLoading: Lod
  }
}

const app = createApp(App)
app.use(createPinia())
app.use(Loading)
app.use(router)
app.use(ElementPlus)


app.mount('#app')
