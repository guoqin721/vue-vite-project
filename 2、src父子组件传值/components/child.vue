<template>
  <div>{{msg}}</div>
  <div>{{title}}</div>
  <div @click="send">{{arr}}</div>
</template>
<script setup lang="ts">
// 父组件给子组件传值
// 方法一：用了ts的写法
const props = withDefaults(defineProps<{
  title: string,
  msg: string,
  arr: number[]
}>(), {
  title: '默认值',
  arr: () => [1, 4]
})
console.log('title', props.title)
// 方法二：没有用ts的写法
// const props = defineProps({
//   title: {
//     type: String,
//     default: '默认值'
//   },
//   msg: {
//     type: String,
//     default: '默认值'
//   },
//   arr: {
//     type: Array,
//     default: []
//   }
// })
// console.log(props.msg, props.arr)

// 子组件给父组件传值，需要用到自定义事件
// 方法一: 没有用ts声明
// const emit = defineEmits(['event1', 'event2'])
// const send = () => {
//   emit('event1', '我是父组件的值', 'parent')
//   emit('event2', '我是父组件的值2', 'parent2')
// }
// 方法二: 用了ts声明
// const emit = defineEmits<{
//   (e: 'event1', str: string, str2: string):void
//   (e: 'event2', str: string, str2: string):void
// }>()
// const send = () => {
//   emit('event1', '我是父组件的值', 'parent')
//   emit('event2', '我是父组件的值', 'parent')
// }
// 方法三 子组件暴露方法和属性供父组件使用
const exposeFn = () => {
  console.log(11)
}
defineExpose({
  name: 'guoqin',
  exposeFn: ()=> {console.log('first')}
})
</script>