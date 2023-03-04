<script setup>
import { toRefs, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'

// 方式一: 简单点的
// 1.获取仓库
const store = useStore()
// 因为getters它不是一个reactive对象, 所以在使用toRefs对其恢复响应式的时候vue在控制台会友情提示一条橙色的警告
// const { totalFriendsAge: ta } = toRefs(store.getters)

// 方式二: hooks函数
// import { useMapGetters } from '@/hooks/useMapGetters'
// const { totalFriendsAge } = useMapGetters(['totalFriendsAge'])

// 方式三: computed函数来使数据恢复响应式
const totalFriendsAge2 = computed(() => store.getters.totalFriendsAge)
</script>

<template>
  <!-- 柔性警告 -->
  <div class="map-getters">
    <!-- mapGetters: 目的是简化tempalte模板中的Mustache表达式 -->
    <!-- <h2>计算朋友的年龄总和: {{ ta }}</h2> -->
    <!-- computed来恢复响应式 -->
    <h2>计算朋友的年龄总和: {{ totalFriendsAge2 }}</h2>
  </div>
</template>

<style scoped></style>