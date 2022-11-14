<!--
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-11-14 10:52:30
 * @FilePath: \vue-project\src\App.vue
-->
<template>
  <input type="text" v-model="message1" name="">
  <input type="text" v-model="message2.b.c" name="" id="">
  <div id="ipt" ></div>
  <button @click="stop">停止监听</button>
</template>
<script setup lang="ts">
import {watchEffect, ref, reactive} from 'vue'
let message1 = ref<string>('message1')
let message2 = reactive({a: 1, b: {c: 3}})
const stop = watchEffect((onClearup) => {
  let iptDom: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement // 定义在了watchEffect回调函数中
  // console.log('mesage1', message1.value)
  // console.log('mesage2', message2.b.c)
  iptDom.innerHTML = message1.value
  console.log('iptDom.innerHTML', iptDom && iptDom.innerHTML)
  onClearup(() => { // 最先执行
    console.log('before11')
  })
}, {
  flush: 'post', // 组件渲染后执行 这里必须有post, 否则iptDom为null
  // onTrack (e) {
  //   debugger
  // },
  // onTrigger (e) {
  //   debugger
  // }
})
</script>
<style lang="">
  
</style>