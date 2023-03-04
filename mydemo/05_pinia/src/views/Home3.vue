<script setup>
import { useCounter } from '@/stores/counter'

const counterStore = useCounter()

</script>

<template>
  <div class="home3">
    <!-- 在pinia中template中的Mustache语法中可以省略state、getters、actions -->
    <h2>双倍计数: {{ counterStore.doubleCount }}</h2>
    <h2>双倍计数加1: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>通过id查找朋友: {{ counterStore.getFriendById(112) }}</h2>
    <h2>打印信息: {{ counterStore.printInfo }}</h2>
  </div>
</template>

<style scoped></style>