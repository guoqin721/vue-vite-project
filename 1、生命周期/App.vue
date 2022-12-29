<template>
  <A v-if="flag"></A>
  <button @click="flag = !flag">销毁-创建</button>
</template>
<script setup lang="ts">
import A from '@/components/A.vue'
import {ref} from 'vue'
const flag = ref<Boolean>(true)
</script>