<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-11-02 14:52:43
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <input type="text" v-model="name" placeholder="name" name="" id="">
  <input type="text" v-model="sex" placeholder="sex" id="">
  <h1>{{person}}</h1>
  <h1>{{person2}}</h1>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
let name = ref()
let sex = ref()
// let person = computed(() => {
//   return `${name.value}-${sex.value}`
// })
let person = computed({
  get() {
    return `${name.value}-${sex.value}`
  },
  set(value) {
    name.value = value.split('-')[0]
    sex.value = value.split('-')[1]
  }
})
const person2 = computed(() => {
  return `${name.value}+${sex.value}`
})
person.value = 'guoqin-1'
</script>
<style lang="">
  
</style>