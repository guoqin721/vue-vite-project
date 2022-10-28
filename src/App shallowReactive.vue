<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-27 16:42:48
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="changeName">
    {{person.name}}
    <br />
    {{person.a.b}}
    <br />
    person2:{{person2.job}}
    <br/>
    {{name}}
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, shallowReactive, triggerRef} from 'vue'
type M = {
  name: string,
  a: {b: string}
}
let name = ref('name1')
let person = shallowReactive({name: 'name1', a: {b: 'b'}})
let person2 = reactive({job: 'job1'})
const changeName = () => {
  name.value = 'name2'
  // person2.job = 'job2'
  // person2 = {job: '333'} // 破坏了proxy
  // person = {name: '333', a: {b: '1'}} // 破坏了proxy
  person.a.b = 'bb' // 只改变值不改变页面
  // person.a = {b: 'bb'}  // 改变值改变页面
  // 同shallowRef一样，shallReactive不能和reactive、ref同时使用,同时使用会使页面和值都发生变化
  // shallowReactive（.[第一层属性]）与shallowRef（.value）都是第一层是响应式的。下面的则不是
  console.log(person)
}
</script>
<style lang="">
  
</style>