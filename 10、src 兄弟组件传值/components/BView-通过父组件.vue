<template>
  <div class="box">B组件接收的值是：{{ params }}</div>
  <hr />
</template>

<script lang="ts" setup>
  defineProps<{
    params: string
  }>()
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>