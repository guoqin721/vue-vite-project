import type { App, VNode } from 'vue'
import Loading from './index.vue'
import { render, createVNode } from 'vue'

// 返回的是个对象或者函数，如果是对象必须有install函数作为属性
export default {
  install (app: App) {
    // createVNode将Loading 转为虚拟dom
    const Vnode: VNode = createVNode(Loading)
    // Vnode挂载到页面上
    render(Vnode, document.body)
    console.log(Vnode)

    app.config.globalProperties.$guoLoading = {
      show: Vnode?.component?.exposed?.show,
      hide: Vnode?.component?.exposed?.hide
    }
  }
}