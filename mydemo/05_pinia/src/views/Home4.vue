<script setup>
import { useCounter } from '@/stores/counter'

const couterStore = useCounter()

const incrementBtnClick = () => {
  couterStore.increment()
}
const incrementBtnClickTen = () => {
  couterStore.incrementTen(10)
}
</script>

<template>
  <div class="home4">
    <h2>当前计数: {{ couterStore.count }}</h2>
    <button @click="incrementBtnClick">发起action递增count</button>
    <button @click="incrementBtnClickTen">发起action递增10count</button>
  </div>
</template>

<style scoped></style>