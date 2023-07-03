<template>
  <div>
    <img alt="" v-for="(item, index) in arr" :key="index"  v-lazy="item">
  </div>
</template>

<script setup lang="ts">
import type {Directive, DirectiveBinding} from 'vue'
// import.meta是vite提供的批量导入的方式
// 方式一：glob是懒加载模式import.meta.glob('./assets/images/*.*')
// glob相当于() => import(),import()会进行代码分包打包
// let modules = {
//   'xxx': () => import('xxx')
// }

// 方式二： globEager是静态加载， import.meta.glob('./assets/images/*.*', {eager: true})等同于import.meta.globEager('./assets/images/*.*')
// globEager相当于import xxx from 'xxx'

// let imageList = import.meta.glob('./assets/images/*.*')
let imageList: Record<string, {default: string}> = import.meta.globEager('./assets/images/*.*')
// console.log(imageList)
const arr = Object.values(imageList).map(e => e.default)

// 自定义指令实现懒加载逻辑
let vLazy:Directive<HTMLImageElement, string> = async (el: HTMLImageElement, bingding: DirectiveBinding) => {
  const def = await import('./assets/default.png')
  el.src = def.default

  // js判断一个元素是否在可视区域，IntersectionObserver接受两个参数一个箭头函数，一个options。第一个箭头函数的参数enr是数组，该数组元素为监听的元素
  // enr[0]记录了被监控的各个目标元素和可视区的各个信息,其中intersectionRatio记录了被监控的目标元素在可视区域的可见比例
  const observer = new IntersectionObserver((enr) => {
    console.log(enr[0])
    if (enr[0].intersectionRatio > 0) {
      // setTimeout让懒加载效果更明显
      setTimeout(() => {
        el.src = bingding.value
        observer.unobserve(el)
      }, 500)
    }
  })
  observer.observe(el)
}

</script>

<style scoped>
img{
  width: 100%;
  height: 400px;
}
</style>