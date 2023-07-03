<template>
  <div>
    <img id="test" src="./assets/vuex.png">
  </div>
</template>

<script setup lang="ts">
import useBase64 from './hooks'
useBase64({el: '#test'}).then(res => {
  console.log(res)
})
</script>

<style scoped>
img{
  height: 200px;
  width: 200px;
}
</style>