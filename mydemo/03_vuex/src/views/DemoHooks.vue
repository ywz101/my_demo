<script setup>
import { useMapState } from '@/hooks/useMapState'

// 由于自己封装的hooks函数, 内置了computed函数, 所以无需toRefs函数也具备了响应式
const { name: hName, age: hAge } = useMapState(['name', 'age'])

</script>

<template>
  <div class="demo">
    <!-- 1.普通写法: 表达式长的那种 -->
    <h2>姓名: {{ $store.state.name }}</h2>
    <h2>年龄: {{ $store.state.age }}</h2>

    <!-- 2.使用hooks封装的useMapState函数 -->
    <h2>姓名: {{ hName }}</h2>
    <h2>年龄: {{ hAge }}</h2>
    <hr>
    <hr>
  </div>
</template>

<style scoped></style>