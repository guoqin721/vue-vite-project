<template>
<h1>爷爷级别的</h1>
<label>
  红色
  <input type="radio" name="color" v-model="colorValue" value="red">
</label>
<label>
  黄色
  <input type="radio" name="color" v-model="colorValue" value="yellow">
</label>
<label>
  绿色
  <input type="radio" name="color" v-model="colorValue" value="green">
</label>
<div class="box"></div>
<hr />
<A></A>
</template>
<script setup lang="ts">
import A from '@/components/AView.vue'
import {ref, provide, readonly} from 'vue'
const colorValue = ref<string>('red')
// 如果不想让子组件修改provide中的值则用readonly包裹
// provide('color', readonly(colorValue))
provide('color', colorValue)
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: v-bind(colorValue);
}
</style>
