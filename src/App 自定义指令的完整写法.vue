<template>
  <button @click="flag = !flag">切换</button>
  <!-- 更新 -->
  <a-model v-background:canshu.xiushifu="{background: 'red', flag: flag}"></a-model>
  <!-- 销毁 -->
  <!-- <a-model v-if="flag" v-background:canshu.xiushifu="{background: 'red'}"></a-model> -->
</template>
<script setup lang="ts">
import AModel from "@/components/A.vue";
import {ref, Directive, DirectiveBinding} from 'vue'
// vue指令是v-的形式，所以指令的命名必须是vNameOfDirective
// arg数组里面有四个值：
  // 第一个是HTMLElement,绑定指令的元素；
  // 第二个是指令的参数对象{arg：参数, modifiers: 修饰符, value: 引号中的内容{background: 'red'}, oldValue: 旧数据, instance: 实例}
  // 第三个是虚拟dom vNode
  // 第四个是之前的虚拟dom preVnode
// DirectiveBinding用于做类型推导，给其穿个泛型
type Dir = {
  background: string
}

const flag = ref<boolean>(true)
const vBackground: Directive = {
  created () {
    console.log('========>created')
  },
  beforeMount (...arg: Array<any>) { 
    console.log('========>beforeMount')
    console.log('arg', arg)
  },
  mounted (el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log('========>mounted')
    // 因为传入了泛型Dir，所以.background会有提示
    console.log('dir', dir.value.background)
    el.style.background = dir.value.background
  },
  beforeUpdate () {
    console.log('========>beforeUpdate')
  },
  updated () {
    console.log('========>updated')
  },
  beforeUnmount () {
    console.log('========>beforeUnmount')
  },
  unmounted () {
    console.log('========>unmounted')
  },

}
</script>
