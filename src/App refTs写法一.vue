<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-25 17:14:51
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="changeName">
    {{person.name}}
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
type M = {
  name: string
}
const person = ref<M>({name: 'name1'})
const changeName = () => {
  person.value.name = 'name2'
}
</script>
<style lang="">
  
</style>