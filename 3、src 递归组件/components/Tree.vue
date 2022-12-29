<template>
  <div style="padding-left: 20px;" v-for="item in data" :key="item.name">
    <input type="checkbox" v-model="item.checked">
    <span>{{item.name}}</span>
    <!-- <Tree v-if="item?.children?.length" :data="item.children"/> -->
    <guoqin v-if="item?.children?.length" :data="item.children"/>
  </div>
</template>
<script setup lang="ts">
// 递归组件调用的三种方式
// 方法一：直接调用，名字为组件名
interface T2 {
  name: string,
  checked: boolean,
  children?: T2[]
}
defineProps<{
  data?: T2[]
}>()
</script>
<script lang="ts">
// 方法二：重新定义组件名字
export default {
  name: 'guoqin'
}
// 方法三：利用插件 unplugin-vue-define-options
</script>