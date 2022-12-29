<template>
  <div class="content div1">
    <slot name="header"></slot>
  </div>
  <div class="content div2">
    <slot :testData="data" :number="number"></slot>
  </div>
  <div class="content div1">
    <slot name="footer"></slot>
  </div>
  <div class="content div3">
    <slot name="footer"></slot>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
type names = {
  name: string,
  age: number
}
const data = ref<names[]>([{
  name:'name1',
  age: 12
},{
  name:'name2',
  age: 124
},{
  name:'name3',
  age: 42
}])
const number = ref<number>(22)
</script>
<style scoped>
.content{
  height: 100px;
}
.div2{
  background: red;
}
.div3{
  background: yellowgreen;
}
</style>