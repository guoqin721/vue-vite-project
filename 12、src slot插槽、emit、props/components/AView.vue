<template>
  <div class="box" @click="send">A组件</div>
  <hr />
</template>

<script lang="ts" setup>
import {getCurrentInstance} from 'vue'
const instance = getCurrentInstance()
const send = () => {
  instance?.proxy?.$Bus.emit('on-click1', 'A组件-数据1')
}

</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>