<template>
  <div class="loading" v-show="isShow">
    loading
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref<boolean>(false)
const show = () => {
  isShow.value = true
}
const hide = () => {
  isShow.value = false
}

defineExpose({
  isShow,
  show,
  hide
})
</script>
<style scoped>
/* vue3穿透用:deep()函数，()中为要改变样式的选择器，:deep()要放到自定义的选择器那一层 */
  .loading{
    background: black;
    opacity: 0.6;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>