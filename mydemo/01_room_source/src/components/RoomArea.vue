<script setup>
import HeaderArea from './HeaderArea.vue'
import RoomItem from './RoomItem.vue'

const props = defineProps({
  areaData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="room-area">
    <!-- 头部区域 -->
    <HeaderArea :title="areaData" />
    <!-- 房间列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <RoomItem :itemData="item" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
</style>