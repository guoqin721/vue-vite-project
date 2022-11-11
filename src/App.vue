<template>
  <input type="text" v-model="message1" name="" id="">
  <input type="text" v-model="message2.b.c" name="" id="">
</template>
<script setup lang="ts">
import {ref, reactive, watchEffect} from 'vue'
const message1 = ref<string>('message1')
const message2 = reactive({a: 1, b: {c: 3}})
watchEffect((onin) => {
  console.log('message1', message1.value) // 这里得写.value
  console.log('message2', message2.b.c)
})
</script>
<style lang="">
  
</style>