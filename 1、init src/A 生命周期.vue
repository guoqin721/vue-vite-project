<!--
 * @Date: 2022-11-15 10:27:24
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-11-15 10:43:25
 * @FilePath: \vue-project\src\components\A.vue
-->
<template>
  <div ref="div">{{msg}}</div>
  <button @click="change">update</button>
</template>
<script setup lang="ts"> // vue3,setup没有beforeCreate、created两个生命周期
import {ref ,onBeforeMount, onMounted, onBeforeUpdate, onUpdated,onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered} from 'vue'
const msg = ref<string>('wo')
const div = ref<HTMLDivElement>()
console.log('setup先调用')
const change = () => {
  msg.value = '改变了'
}
onBeforeMount(() => {
  console.log('onBeforeMount', div.value)
})
onMounted(() => {
  console.log('onMounted', div.value)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', msg.value, div.value?.innerHTML)
})
onUpdated(() => {
  console.log('onUpdated', msg.value, div.value?.innerHTML)
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount', msg.value)
})
onUnmounted(() => {
  console.log('onUnmounted', msg.value) // 能获取到msg.value
})
onRenderTracked((effect) => { // 依赖收集
  console.log('onRenderTracked', effect)
})
onRenderTriggered((effect) => { // 依赖触发
  console.log('onRenderTriggered', effect)
})
</script>
<script lang="ts">
  export default {
    beforeCreate () {
      console.log('beforeCreate')
    },
    created () {
      console.log('created')
    }
  }
</script>