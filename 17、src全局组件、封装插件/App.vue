<template>

</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const app = getCurrentInstance()
// 实现了在任何地方可以调用组件Loading的方法
app?.proxy?.$guoLoading.show()
</script>

<style scoped>

</style>