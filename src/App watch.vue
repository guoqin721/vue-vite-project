<!--
 * @Date: 2022-11-02 17:28:50
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-11-02 17:35:37
 * @FilePath: \vue-project\src\App watch.vue
-->
<template>
  <input type="text" v-model="message1" name="" id="">
  <input type="text" v-model="message2" name="" id="">
</template>
<script setup lang="ts">
// 直接接听响应式对象，默认启用深层监控
// 监听函数，不写deep时函数返回值变化时才触发，默认没启动deep
// 直接接听ref对象，则默认不启用深层监控
// 直接接听ref对象.value，等同于监听一个reactive响应式对象，则默认启用深层监控
import {ref, watch, reactive} from 'vue'
const message1 = ref<string>('message1')
const message2 = ref<string>('message2')
const state = reactive({
  count: 1,
  job: {
    name: 'jobName'
  }
})
const state2 = ref({
  count: 1,
  job: {
    name: 'jobName'
  }
})
// watch(message1, (newVal, old) => {
//   console.log(old, newVal)
// })
// watch([message1, message2], ([newVal1, newVal2], [old1, old2]) => {
//   console.log(old1, newVal1)
// })
// 注意这里不可以直接写成state.job.name,需要写成函数() => state.job.name.但state.job可以简写，不知道为啥？
watch(() => state.job.name, (newVal, old) => {
  console.log(newVal, old)
})
// watch(state, (newVal, old) => {
//   console.log('直接接听响应式对象，默认启用深层监控', newVal, old)
// })
// watch(() => state, (newVal, old) => {
//   console.log('监听函数，不写deep时函数返回值变化时才触发，默认没启动deep', newVal, old)
// },{
//   deep: true
// })
state.job.name = 'jobname2'
// watch(state2, (newVal, old) => {
//   console.log('直接接听ref对象，则默认不启用深层监控', newVal, old)
// })
// watch(state2.value, (newVal, old) => {
//   console.log('直接接听ref对象.value，等同于监听一个reactive响应式对象，则默认启用深层监控', newVal, old)
// })

// state2.value.job.name = 'jobname2'
</script>
<style lang="">
  
</style>