<template>
  <div>我是父组件</div>
  <div>isShow：{{ isShow }}</div>
  <div>textval：{{ textval }}</div>
  <button
    @click="
      {
        isShow = !isShow;
      }
    "
  >
    开关
  </button>
  <hr />
  <v-model-view v-model="isShow" v-model:textVal.isBT="textval" />
</template>
<script setup lang="ts">
// 对于VModel组件，原vue2的value现在变为了modelValue,vue2的input事件变为了update:modelValue
// vue3支持添加多个v-model，看例子 v-model:textVal
// vue3支持自定义修饰符modifiers,子组件接收格式为model名称Modifiers.修饰符名称 例子 textValModifiers.isBT

import vModelView from "@/components/vModel.vue";
import { ref } from "vue";
const isShow = ref<boolean>(true);
const textval = ref<string>("wenben");
</script>
