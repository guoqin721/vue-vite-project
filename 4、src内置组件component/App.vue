<template>
<div style="display: flex;">
  <button @click="change(item, index)" class="btn" :class="index === i ? 'active': ''" v-for="(item, index) in data">{{item.name}}</button>
</div>
<component :is="compId"></component>
</template>
<!-- <script setup lang="ts">
// 方法一：is属性传入组件
import Aview from '@/components/AView.vue'
import Bview from '@/components/BView.vue'
import Cview from '@/components/CView.vue'
// markRaw跳过reactive中的proxy
// shallowRef只到ref.value的第一层
import { ref, shallowRef, markRaw, reactive } from 'vue'
const i = ref<number>(0)
const compId = shallowRef(Aview)
const data = ref([
  {
    name: 'A视图',
    com: markRaw(Aview)
  },
  {
    name: 'B视图',
    com: markRaw(Bview)
  },
  {
    name: 'C视图',
    com: markRaw(Cview)
  },
])
const change = (item, index) => {
  i.value = index
  compId.value = item.com
}
</script> -->
<script setup lang="ts">
// 方法二：is属性传入组件名称

// markRaw跳过reactive中的proxy
// shallowRef知道ref.value的第一层
import { ref, shallowRef } from 'vue'
const i = ref<number>(0)
const compId = shallowRef('Aview')
const data = ref([
  {
    name: 'A视图',
    com: 'Aview'
  },
  {
    name: 'B视图',
    com: 'Bview'
  },
  {
    name: 'C视图',
    com: 'Cview'
  },
])
const change = (item, index) => {
  i.value = index
  compId.value = item.com
}
</script>
<script lang="ts">
import Aview from '@/components/AView.vue'
import Bview from '@/components/BView.vue'
import Cview from '@/components/CView.vue'
export default {
  components: {
    Aview,
    Bview,
    Cview
  }
}
</script>
<style scoped>

</style>