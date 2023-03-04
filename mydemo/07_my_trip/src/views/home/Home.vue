<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue'
import HomeSearchBox from './cpns/HomeSearchBox.vue'
</script>

<template>
  <div class="home">
    <header class="header">
      <HomeNavBar />
      <section class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </section>
      <HomeSearchBox />
    </header>
  </div>
</template>

<style lang="less" scoped>
.header {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>