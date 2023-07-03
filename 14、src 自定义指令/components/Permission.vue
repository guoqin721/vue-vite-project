<template>
  <button v-has-show="'shop:create'">新建</button>
  <button v-has-show="'shop:edit'">编辑</button>
  <button v-has-show="'shop:delete'">删除</button>
</template>
<script setup lang="ts">
import type {Directive, DirectiveBinding} from 'vue'
//permission
localStorage.setItem('userId','xiaoman-zs')
//mock后台返回的数据
const permission = [
  // 'xiaoman-zs:shop:edit',
  'xiaoman-zs:shop:create',
  // 'xiaoman-zs:shop:delete'
]
const userId = localStorage.getItem('userId')
// 自定义指令的简写方式箭头函数，简写方式对应的生命周期为mounted、updated
//  Directive<HTMLElement, object>是什么意思？看下个视频说，object是返回值？HTMLElement是元素类型
const vHasShow: Directive<HTMLElement, object> = (el: HTMLElement, bingding: DirectiveBinding) => {
  if (!permission.includes(`${userId}:${bingding.value}`)) {
    el.style.display = 'none'
  }
}
</script>