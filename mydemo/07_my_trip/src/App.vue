<script setup>
import TabBar from '@/components/tab-bar/TabBar.vue'
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link>
    <h2>app组件</h2> -->
    <TabBar />
  </div>
</template>

<style scoped>
.router-link-active {
  color: #f00;
  font-size: 24px;
}
</style>