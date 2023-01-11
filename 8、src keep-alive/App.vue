<template>
  <button @click="flag = !flag">切换组件</button>
  <br />
  <!-- <keep-alive :include="['AView']"> -->
  <keep-alive :max="2">
    <A v-if="flag"></A>
    <B v-else></B>
  </keep-alive>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import A from '@/components/AView.vue'
import B from '@/components/BView.vue'
const flag = ref<boolean>(false)
</script>
