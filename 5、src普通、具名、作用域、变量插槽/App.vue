<template>
  <!-- 方法一：非简写的方法 -->
  <content>
    <template v-slot:header>
      <div>我是header内容</div>
    </template>
    <!-- <div>我是中间内容</div> -->
    <template v-slot="{testData, number}">
      <div v-for="item in testData" :key="item.age">
        name:{{item.name}}, number: {{number}}
      </div>
    </template>
    <!-- <template v-slot:footer>
      <div>我是footer内容</div>
    </template> -->
    <!-- 变量插槽 -->
    <template v-slot:[name]>
      <div>我是变量下{{name}}内容</div>
    </template>
  </content>
</template>
<!-- 方法一：简写的方法 -->
<!-- <template>
  <content>
    <template #header>
      <div>我是header内容</div>
    </template>
    <template #default="{testData, number}">
      <div v-for="item in testData" :key="item.age">
        name:{{item.name}}, number: {{number}}
      </div>
    </template>
    <template #[name]>
      <div>我是变量下{{name}}内容</div>
    </template>
  </content>
</template> -->
<script setup lang="ts">
import Content from '@/components/Content.vue'
import {ref} from 'vue'
let name = ref<string>('footer')
</script>