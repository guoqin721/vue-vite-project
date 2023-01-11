<template>
  <div class="box" @click="send">A组件</div>
  <hr />
</template>

<script lang="ts" setup>
import bus from '@/Bus'
const send = () => {
  bus.emit('on-click', 'A组件数据')
}
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>