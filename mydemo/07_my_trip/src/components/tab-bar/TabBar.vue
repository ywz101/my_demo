<script setup>
import { tabbarData } from '@/assets/data/tabbarData'
import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'

const currentIndex = ref(0)

</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff8954">
      <template v-for="(item, index) in tabbarData" :key="item.index">
        <van-tabbar-item :to="item.path">
          <!-- 默认插槽 -->
          <span>{{ item.text }}</span>
          <!-- 具名插槽 -->
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  // 局部样式
  //  --van-tabbar-item-icon-size: 100px; 

  // :deep(.van-tabbar-item__icon) {
  //   font-size: 300px;
  // }

  img {
    height: 26px;
  }
}
</style>