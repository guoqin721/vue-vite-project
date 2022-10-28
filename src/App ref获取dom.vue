<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-26 09:57:14
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="changeName" ref="nametongxiamianDom">
    ref获取dom
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const nametongxiamianDom = ref<HTMLDivElement>()
console.log(1, nametongxiamianDom.value?.innerHTML) // 这里还没有渲染获取不到
const changeName = () => {
  console.log(2, nametongxiamianDom.value?.innerHTML)
}
</script>
<style lang="">
  
</style>