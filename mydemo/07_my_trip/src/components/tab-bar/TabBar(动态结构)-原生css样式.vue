d<script setup>
import { tabbarData } from '@/assets/data/tabbarData'
import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const currentIndex = ref(0)

const router = useRouter()

const tabbarItemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" 
              :key="item.index">
      <div class="tab-bar-item" 
           :class="{ active: currentIndex === index }"
           @click="tabbarItemClick(index, item)"
           >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  height: 50px;
  border-top: 1px solid #f3f3f3;
  
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      margin-top: 2px;
      font-size: 12px;
    }
  }
}
</style>