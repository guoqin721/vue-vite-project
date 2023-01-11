<template>
  <div class="container">
    <Teleport to="body" :disabled="true">
      <A></A>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import A from '@/components/A.vue'
</script>
<style>
  .container{
    position: relative;
    height: 50vh;
    background: yellowgreen;
  }
</style>