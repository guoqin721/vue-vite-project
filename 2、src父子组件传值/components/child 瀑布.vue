<template>
  <div class="wrap">
    <div class="items" :style="{left: item.left + 'px', background: item.background, top: item.top + 'px', height: item.height + 'px'}" :key="item.top" v-for="item in waterfallList"></div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, reactive} from 'vue'
type L = {
  height: number,
  background: string
}
const props = defineProps<{
  list: any[]
}>()
const waterfallList = reactive<any[]>([])
const heightList: number[] = []
const init = () => {
  const cloumn = Math.floor(document.body.clientWidth / 130)
  for (let i = 0, len = props.list.length; i < len; i++) {
    if (i < cloumn) {
      props.list[i].top = 20
      props.list[i].left = 130 * i
      heightList.push(props.list[i].height + 20)
      waterfallList.push(props.list[i])
    } else {
      let minIndex = 0;
      let current = heightList[0]
      heightList.forEach((e, i) => {
        if (e < current) {
          current = e
          minIndex = i
        }
      })
      props.list[i].top = current + 20
      props.list[i].left = minIndex * 130
      heightList[minIndex] = current + 20 + props.list[i].height
      waterfallList.push(props.list[i])
    }
  }
}
onMounted(() => {
  init()
})
</script>
<style scoped>
.wrap{
  position: relative;
}
.items{
  position: absolute;
  width: 120px;
}
</style>