<template>
  <table border="1" align="center" width="600">
    <thead>
      <tr>
        <th>名称</th>
        <th>数量</th>
        <th>单价</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr :key="index" v-for="(item, index) in data">
        <td>{{item.name}}</td>
        <td><button @click="addAndSub(item, false)"> - </button>{{item.count}}<button @click="addAndSub(item, true)"> + </button></td>
        <td>{{item.price}}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
      <tr>
        <td colspan="4">总价: {{total}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
  import {reactive, computed} from 'vue'
  type Shop = {
    name: string,
    count: number,
    price: number
  }
  const data = reactive<Shop[]>([{
    name: '鞋子',
    count: 1,
    price: 200,
  },{
    name: '袜子',
    count: 12,
    price: 100,
  },{
    name: '裙子',
    count: 21,
    price: 300,
  }])
  const addAndSub = (item: Shop, type: boolean):void => {
    if (item.count > 0 && !type) {
      item.count--
    }
    if (item.count < 99 && type) {
      item.count++
    }
  }
  const del = (index:number):void => {
    data.splice(index, 1)
  }
  const total = computed(() => {
    return data.reduce((prev, cur) => {
      return prev + cur.count * cur.price
    }, 0)
  })
</script>
<style lang="">
  
</style>