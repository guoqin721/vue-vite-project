<template>
  <div class="box" @click="send">A组件</div>
  <hr />
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'on-click',str: string): void
}>()
const send = () => {
  emit('on-click', 'A组件的数据')
}
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>