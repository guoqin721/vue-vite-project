<template>
  <Suspense>
    <template #default>
      <syncVue />
    </template>
    <template #fallback>
      <skeleton />
    </template>
  </Suspense>
</template>
<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
import skeleton from '@/components/skeleton.vue'
const syncVue = defineAsyncComponent(() => import('@/components/sync.vue'))
</script>