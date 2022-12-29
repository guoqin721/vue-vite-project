<!--
 * @Author: guoqin 1178562936@qq.com
 * @Date: 2022-10-19 11:14:00
 * @LastEditors: guoqin 1178562936@qq.com
 * @LastEditTime: 2022-10-26 09:45:26
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="changeName">
    {{name}}
  </div>
</template>
<script setup lang="ts">
import {customRef} from 'vue'
function MyRef<T> (value: T) {
  let timer:any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log('出发了')
          value = newValue
          trigger()
          timer = null
        }, 500)
      }
    }
  })
}
const name = MyRef<string>('name1')
const changeName = () => {
  console.log(name)
  name.value = 'name2'
}
</script>
<style lang="">
  
</style>