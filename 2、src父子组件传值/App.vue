<template>
  <Child ref="child" @event1="receive" @event2="receive" :title="title" :msg="msg" :arr="arr"></Child>
</template>
<script setup lang="ts">
import Child from '@/components/child.vue'
import {ref, onMounted} from 'vue'
const title = ref<string>()
const msg='msg'
const arr = ref([1, 2, 3])
const receive = (str1:string, str2: string) => {
 console.log(str1, str2)
}
const child = ref<InstanceType<typeof Child>>()
onMounted(() => {
  console.log(child.value?.name, child.value?.exposeFn())
})
</script>