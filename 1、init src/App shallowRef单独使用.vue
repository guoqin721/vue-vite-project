<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-27 16:21:08
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="changeName">
    {{person.name}}
    {{person.a.b}}
    person2:{{person2.job}}
    {{name}}
  </div>
</template>
<script setup lang="ts">
// shallowRef只有第一层是响应式的（对.value的操作会渲染页面），再下层则不会渲染页面
import {ref, shallowRef, triggerRef} from 'vue'
import type {Ref} from 'vue'
type M = {
  name: string,
  a: {b: string}
}
const name = ref('2')
const person:Ref<M> = ref({name: 'name1', a: {b: 'b'}})
let person2 = shallowRef({job: 'job1'})
const changeName = () => {
  person2.value = {job: '333'} // shallowRef 对value的改变会改变页面
  // person2.value.job = 'job2' // shallowRef 对value下层的改变只改值不会改变页面
  // person.value.a.b = 'bb'
  // name.value = '3'
  // triggerRef(person)
  // person.value.name = 'name2'  // ref的赋值,triggerRef函数不能和shallowRef一起使用，否则shallowRef会变成ref,对value下层值的改变不光值变页面也变
  console.log(person2)
}
</script>
<style lang="">
  
</style>