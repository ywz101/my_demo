<script setup>
import { onMounted, ref } from 'vue'

import Home from './views/Home.vue'

const appH2El = ref()
const homeH2El = ref()

onMounted(() => {
  console.log(appH2El.value)
  console.log(homeH2El.value.$el.children[0])
  homeH2El.value.homeBtnClilck()
  homeH2El.value.homeBtnClilck()
  homeH2El.value.homeBtnClilck()
})

</script>

<template>
  <div class="app">
    <h2 ref="appH2El">App组件中的h2元素</h2>
    <!-- 使用Home组件 -->
    <Home ref="homeH2El" />
  </div>
</template>

<style scoped></style>