<script setup>
import { useHome } from '@/stores/home'

const homeStore = useHome()

// 在pinia在发起网络请求, 直接调用actions中的方法名即可, 无需$patch()
homeStore.fetchHomeMultidata().then(res => {
  console.log(res)
})
</script>

<template>
  <div class="home5">
    <h2>轮播图展示数据</h2>
    <ul>
      <template v-for="item in homeStore.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>