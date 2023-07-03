<template>
  <div v-move class="box">
    <div>haha</div>
  </div>
</template>
<script setup lang="ts">
import type {Directive, DirectiveBinding} from 'vue'
const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
  const mouseDown = (e: MouseEvent) => {
    console.log(e.clientX, el.offsetLeft)
    const X = e.clientX - el.offsetLeft
    const Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  el.addEventListener('mousedown', mouseDown)
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
.box{
  border: 1px solid black;
  width: 200px;
  height: 200px;
  /* margin: 200px; */
}
</style>
