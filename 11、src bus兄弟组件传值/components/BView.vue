<template>
  <div class="box">B组件接收的值是：{{ params }}</div>
  <hr />
</template>

<script lang="ts" setup>
import {getCurrentInstance, ref} from 'vue'
const params = ref<string>('')
const instance = getCurrentInstance()
// const setParams = (str: string) => {
//   params.value = str
// }
// 订阅所有事件
instance?.proxy?.$Bus.on('*', (type, str) => {
  console.log(type, str)
  params.value = str
})
// 订阅on-click1这个事件
// instance?.proxy?.$Bus.on('on-click1', (str) => {
//   console.log(str)
//   params.value = str
// })
// 取消订阅on-click1
instance?.proxy?.$Bus.off('on-click1')
// instance?.proxy?.$Bus.off('on-click1', '方法名')
// 取消订阅所有事件
instance?.proxy?.$Bus.all.clear()
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>