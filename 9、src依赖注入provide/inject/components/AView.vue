<template>
  <div class="box"></div>
  <hr />
  <B></B>
</template>

<script lang="ts" setup>
import {inject} from 'vue'
import B from '@/components/BView.vue'
import type {Ref} from 'vue'
const color = inject<Ref<string>>('color')
</script>
<style>
.box{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: v-bind(color);
}
</style>