<script setup>
import { useRouter } from 'vue-router'

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    res => {
      console.log('获取位置信息成功', res)
    },
    err => {
      console.log('获取位置信息失败', err)
    }
  )
}

const router = useRouter()

const cityClick = () => {
  router.push('/city')
}
</script>

<template>
  <div class="search-box">
    <section class="location">
      <div class="city" @click="cityClick">
        广州
      </div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  height: 44px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;

    .text {
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>