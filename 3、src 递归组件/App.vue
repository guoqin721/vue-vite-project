<template>
  <Tree :data="tree"/>
</template>
<script setup lang="ts">
import Tree from '@/components/Tree.vue'
import { reactive } from 'vue'
interface T {
  name: string,
  checked: boolean,
  children?: T[]
}
const tree = reactive<T[]>([{
  name: '1',
  checked: false,
  children: [{
    name: '1-1',
    checked: false,
      children: [{
      name: '1-1-1',
      checked: false,
    },{
      name: '1-1-2',
      checked: false,
    }]
  },{
    name: '1-2',
    checked: false,
  }],
},{
  name: '2',
  checked: false,
},{
  name: '3',
  checked: false,
},{
  name: '4',
  checked: false,
},])
</script>