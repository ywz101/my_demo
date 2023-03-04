<script setup>
import HomeNavBar from './cpns/HomeNavBar.vue'
</script>

<template>
  <div class="home">
    <header class="header">
      <HomeNavBar />

      <section class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </section>

      <section class="location">
        <div class="city">
          广州
        </div>
        <div class="position">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </section>

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

  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;
    height: 44px;

    .city {
      flex: 1;
    }

    .position {
      width: 74px;
      .text {
        font-size: 12px;
      }

      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>