<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-26 11:32:30
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <template> // push
<ul>
  <li v-for="item in arr">{{item}}</li>
</ul>
  <button @click="changeName" ref="nametongxiamianDom">
    添加
  </button>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
let arr = reactive<string[]>([])
const changeName = () => {
  // arr = ['1', '2', '3'] 
  // reactive proxy 不能直接赋值，否则会破坏响应式。可用1、push方法，2 用对象，将数组变成对象的一个属性
  arr.push('3')
}
</script> -->
<template>
  <ul>
    <li v-for="item in obj.arr">{{item}}</li>
  </ul>
    <button @click="changeName" ref="nametongxiamianDom">
      添加
    </button>
  </template>
  <script setup lang="ts">
  import {reactive} from 'vue'
  let obj = reactive<{
    arr: string[]
  }>({arr: []})
  const changeName = () => {
    obj.arr = ['1', '2', '3'] 
  }
  </script>
