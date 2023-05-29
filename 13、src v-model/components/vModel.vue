<template>
  <button @click="close()">子组件关闭</button>
  <div>我是子组件</div>
  <div>modelValue：{{ modelValue }}</div>
  <div>
    textVal：<input
      @input="changeHander($event)"
      type="text"
      :value="textVal"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  modelValue: boolean;
  textVal: string;
  textValModifiers?: {
    isBt: boolean;
  };
}>();
// const emit = defineEmits<{
//   (e: "update:modelValue"): void;
// }>();
const emit = defineEmits(["update:modelValue", "update:textVal"]);
const close = () => {
  emit("update:modelValue", false);
};
const changeHander = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit(
    "update:textVal",
    props.textValModifiers?.isBt ? target.value + "isBT" : target.value
  );
};
</script>
