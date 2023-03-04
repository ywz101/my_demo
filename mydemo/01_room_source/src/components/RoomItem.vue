<script setup>
import { computed } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const title = computed(() => {
  return {
    text: props.itemData.verify_info.messages.join(' '),
    color: props.itemData.verify_info.text_color
  }
})

const bottomInfo = computed(() => {
  return {
    text: props.itemData.bottom_info.content,
    style: {
      color: props.itemData.bottom_info.content_color,
      fontSize: props.itemData.bottom_info.font_size + 'px'
    }
  }
})
</script>

<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title"
            :style="{ color: title.color }">
          {{ title.text }}
        </div>
        <div class="name">{{ itemData.name }}</div>
        <div class="price">{{ itemData.price_format + '/晚' }}</div>
        <div class="bottom-info" 
             :style="bottomInfo.style">
          {{ bottomInfo.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.room-item {
  width: 33.333333%;

  .item-inner {
    margin: 20px 8px;

    .cover {
      img {
        width: 100%;
        border-radius: 3px;
      }
    }

    .info {
      .title {
        margin-top: 8px;
        font-size: 12px;
      }

      .name {
        margin-top: 3px;
        font: 700 16px '';

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .price {
        margin: 3px 0;
        font: 400 14px '';
      }
    }
  }
}
</style>