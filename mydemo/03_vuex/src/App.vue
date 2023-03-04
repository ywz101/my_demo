<script setup>
// 导入组件
import Home from './views/Home.vue'
import Demo from './views/DemoToRefs.vue'
import Demo2 from '@/views/DemoHooks.vue'
import MapGetters from './views/MapGetters.vue'
import Mutations from './views/Mutations.vue'
import Actions from './views/Actions.vue'
import MapActions from './views/MapActions.vue'

// 恢复响应式数据
import { toRefs } from 'vue'
// 得到store
import { useStore } from 'vuex'

const store = useStore()
// 1.先论证数据直接解构会失去响应式
// 2.在外面包裹一个toRefs函数, 让数据恢复响应式
const { counter } = toRefs(store.state)
</script>

<template>
  <div class="app">
    <!-- 1.固定语法: $store.state.counter -->
    <!-- 缺点: 表达式太长, 可读性不强 -->
    <!-- <h2>App组件当前计数: {{ $store.state.counter }}</h2> -->
    <!-- 2.表达式精简 -->
    <!-- <h2>App组件当前计数(精简): {{ counter }}</h2> -->
    <!-- 使用Home组件 -->
    <h2>------------Home - start ---------------------</h2>
    <Home />
    <h2>------------Home - end ---------------------</h2>
    <!-- 使用Demo组件 -->
    <Demo />
    <hr>
    <Demo2 />
    <!-- getters: vuex的五大核心之一 -->
    <h2>计算朋友的年龄总和: {{ $store.getters.totalFriendsAge }}</h2>
    <h2>获取id为101朋友的信息: {{ $store.getters.getFriendById(101) }}</h2>
    <h2>获取id为102朋友的信息: {{ $store.getters.getFriendById(102) }}</h2>
    <h2>打印信息: {{ $store.getters.printInfo }}</h2>
    <!-- 使用MapGetters组件 -->
    <MapGetters />
    <!-- 使用Mutations组件 -->
    <hr>
    <hr>
    <Mutations />
    <Actions />
    <hr>
    <MapActions />
  </div>
</template>

<style scoped></style>