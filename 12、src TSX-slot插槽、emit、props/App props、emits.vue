<template>
  <render-fn name="parentStr" @on-click="getItem"></render-fn>
</template>
<script setup lang="ts">
import renderFn from './App'
const getItem = (e: any) => {
  console.log('getItem', e)
}
</script>

