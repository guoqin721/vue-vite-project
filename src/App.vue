<template>
  <a-model></a-model>
</template>
<script setup lang="ts">
// 对于VModel组件，原vue2的value现在变为了modelValue,vue2的input事件变为了update:modelValue
// vue3支持添加多个v-model，看例子 v-model:textVal
// vue3支持自定义修饰符modifiers,子组件接收格式为model名称Modifiers.修饰符名称 例子 textValModifiers.isBT

import AModel from "@/components/A.vue";

</script>
