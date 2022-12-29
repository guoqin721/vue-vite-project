<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-28 10:19:00
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="change">
    {{name}}
    <br />
    {{name2}}
    <br />
    {{name4}}
  </div>
</template>
<script setup lang="ts">
// 非相应式对象用了toRef无卵用，页面不变，类似于shallowRef
import { toRef, reactive, ref, toRefs, toRaw } from 'vue'
import type {Ref} from 'vue'
let person = {name: 'name1', sex: '女'}
let name = toRef(person, 'name')
let person2 = reactive({name: 'name11', sex: '女'})
let name2 = toRef(person2, 'name')
// const change = ():void => {
//   // name.value = 'name2' // 非相应式对象person用了toRef无卵用，页面不变，类似于shallowRef
//   // console.log(name)
//   console.log(person2, person2.name)
//   name2.value = 'name22'
//   console.log(name2) // 相应式对象person2用了toRef proxy对象变为ObjectRefImpl对象
// }
type M = {

}
// toRefs、toRef的作用：从一个响应式对象(ref，reactive对象)身上结构出一些属性.例如name3/name4、sex3/sex4,使name3、sex3即脱离person3同时还具有响应式
// 要知道let {name3, sex3} = person3,这样直接结构得到的name3和sex3是不具有相应式的
// 实现toRefs
// const toRefs = <T extends Object>(obj: T) => {
//   let m:any = {}
//   for (let i in obj) {
//     m[i] = toRef(obj, i)
//   }
//   return m
// }
const person3 = reactive({name3: '3', sex3: '1'})
const {name3, sex3} = toRefs(person3)

const person4 = ref({name4: '4', sex4: '1'})
console.log('person4', person4)
const {name4, sex4} = toRefs(person4.value) // name4, sex4具有响应式
// const {name4, sex4} = person4.value // name4, sex4不具有响应式，普通值
const change = () => {
  // console.log(name3, sex3)
  name4.value = '44'
  console.log(name4, sex4)
}
// toRaw会把响应式对象转为普通对象，源码提供了__v_raw属性就是实现toRaw的
const person5 = ref({name5: '5', sex4: '1'})
const person6 = reactive({name6: '6', sex4: '1'})
console.log(person5, toRaw(person5.value), person5.value['__v_raw'])
console.log(person6, toRaw(person6), person6['__v_raw'])
</script>
<style lang="">
  
</style>