<template>
  <div class="box"></div>
  <hr />
  <button @click="change">修改color yellow</button>
</template>

<script lang="ts" setup>
import {inject, ref} from 'vue'
import B from '@/components/BView.vue'
import type {Ref} from 'vue'
// 方法二：给inject color添加默认值
// const color = inject<Ref<string>>('color', ref('yellow'))
const color = inject<Ref<string>>('color')
const change = () => {
  // 因为color可能是<Ref<string>>或者undefined，有两种方法：方法一：非空断言color!.value；方法二：给inject color添加默认值
  // 方法一：非空断言color!.value；
  color!.value = 'yellow'
}
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: v-bind(color);
}
</style>