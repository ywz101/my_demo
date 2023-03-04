<script setup>
import { useCounter } from '@/stores/counter'
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'

const counterStore = useCounter()

// 数据会失去响应式
// 1.方式一: vue的核心, toRefs方法
const { count: countToRefs } = toRefs(counterStore)
// 2.方法二: pinia的核心, storeToRefs
const { count: countStoreToRefs } = storeToRefs(counterStore)

// 递增count
const increment = () => {
  counterStore.count++
}
</script>

<template>
  <div class="home">
    <h2>Home计数: {{ counterStore.count }}</h2>
    <h2>Home计数: {{ countToRefs }}</h2>
    <h2>Home计数: {{ countStoreToRefs }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped></style>