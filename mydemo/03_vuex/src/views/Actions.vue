<script setup>
import { useStore } from 'vuex'

const store = useStore()

const counterActionsBtnClick = () => {
  // 仓库去调度
  // dispatch: 调度丶派发
  store.dispatch('incrementAction')
}

const nameActionsBtnClick = () => {
  // 仓库去调度
  // dispatch: 调度丶派发
  store.dispatch('changeNameAction', 'jack')
}
</script>

<template>
  <div class="actions">
    <h2>Actions组件当前计数: {{ $store.state.counter }}</h2>
    <button @click="counterActionsBtnClick">发起counterActions</button>
    <button @click="nameActionsBtnClick">发起nameActions</button>
  </div>
</template>

<style scoped></style>