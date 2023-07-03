<template>
  <!-- 方法二 用全局指令 -->
  <!-- <div id="resize" v-use-resize-guoqin="test"> -->
  <div id="resize">
    <img id="test" src="./assets/vuex.png">
  </div>
  
</template>

<script setup lang="ts">
// 用法一
import useResizeGuoqin from 'use-resize-guoqin'
import {onMounted} from 'vue'
onMounted(() => {
  useResizeGuoqin(document.querySelector('#resize') as HTMLElement, (e: any) => {
    console.log(e)
  })
})
// 方法二 用全局指令
const test = (e: any) => {
  console.log('e', e)
}
</script>

<style scoped>
img{
  height: 200px;
  width: 200px;
}
#resize {
  border: 1px solid black;
  resize: both;
  overflow: hidden;
}
</style>