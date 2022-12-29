<template>
  111
</template>
<script setup lang="ts">
import {axios} from '@/server/axios'
console.log(222)
const data = await axios.get('@/components/data.json')
console.log('first', data)
</script>
<style scoped>

</style>