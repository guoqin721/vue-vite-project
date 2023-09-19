<template>
<div>{{ $env }}</div>
<div>{{ $filter.format('hah') }}</div>
</template>

<script setup lang="ts">
import {getCurrentInstance} from 'vue'
const app = getCurrentInstance()
console.log('1', app?.proxy?.$env)
console.log('2', app?.proxy?.$filter.format('fjdsl'))
</script>

<style scoped>

</style>