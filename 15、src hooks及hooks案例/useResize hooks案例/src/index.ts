// 监听元素是否在视口内 intersectionObserver 
// 监听元素宽高的变化 ResizeObserver
// 监听子集的变化、属性的变化及增删改查 MutationObserver

import type { App, DirectiveBinding } from 'vue'

// 实现hooks
function useResizeGuoqin(el:HTMLElement, callback: Function) {
  const resize = new ResizeObserver((entries) => {
    console.log(entries)
    callback(entries[0].contentRect)
  })
  resize.observe(el)
}

// 实现自定义指令
const install = (app: App) => {
  app.directive('useResizeGuoqin', (el: HTMLElement, bingding: DirectiveBinding) => {
    useResizeGuoqin(el, bingding.value)
  })
}
useResizeGuoqin.install = install

export default useResizeGuoqin
