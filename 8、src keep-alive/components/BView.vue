<template>
  <el-transfer v-model="value" :data="data" />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
onMounted(() => {
  console.log('onMounted:全程只调用一次，可以作为初始化使用')
})
onUnmounted(() => {
  console.log('onUnmounted:组件放在keep-alive中这个函数不会调用')
})
onActivated(() => {
  console.log('onActivated:重复的请求可以放到这里')
})
onDeactivated(() => {
  console.log('onDeactivated:销毁类的东西放在这里')
})
</script>
