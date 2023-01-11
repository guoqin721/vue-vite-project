<template>
  <div>{{ data.name }}</div>
  <div>{{ data.desc }}</div>
  <div>{{ data.age }}</div>
  <img :src="data.url"/>
</template>
<script setup lang="ts">
import {axios} from '@/server/axios'
console.log(222)
interface Data {
  data: {
    "name": string,
    "age": number,
    "url": string,
    "desc": string
  }
}
const { data } = await axios.get<Data>('./data.json')
console.log('first', data)
</script>
<style scoped>

</style>