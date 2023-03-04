<script setup>
import { useMapMutations } from '@/hooks/useMapMutations'

// 减少心智负担
const { changeName, 
        increment,
      } = useMapMutations(['changeName',
                           'increment',
                          ])
</script>

<template>
  <!-- 规则: 开发者必须遵守, 否则报错 -->
  <!-- 规范: 建议开发者遵守, 不会报错 -->
  <!-- 原则: 开发者千万不要违背(是产生bug的温床), 否则会得不偿失 -->
  <div class="mutations">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <hr>
    <h2>姓名: {{ $store.state.name }}</h2>
    <button @click="changeName('ok4')">修改姓名</button>
  </div>
</template>

<style scoped></style>