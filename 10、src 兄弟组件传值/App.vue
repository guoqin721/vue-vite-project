<template>
  <A></A>
  <B :params="params"></B>
</template>
<script setup lang="ts">
import bus from '@/Bus'
import A from '@/components/AView.vue'
import B from '@/components/BView.vue'
import {ref} from 'vue'
const params = ref<string>('')
const receive = (str: string) => {
  console.log('first', str)
  params.value = str
}
bus.on('on-click', receive)
</script>

