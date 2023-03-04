<script setup>
// 数据
import { ref } from 'vue'
import RoomArea from './components/RoomArea.vue'

// 模拟1s渲染内容
let highScore = ref({})

setTimeout(() => {
  import('./data/high_score.json').then(res => {
    highScore.value = res.default
  })
}, 1000)
</script>

<template>
  <div class="app">
    <div class="w">
      <RoomArea :area-data="highScore"/>
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 40px 0;
}


</style>