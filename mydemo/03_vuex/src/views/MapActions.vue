<script setup>
import { useMapActions } from '../hooks/useMapActions'

const { 
        incrementAction: counterActionsBtnClick, 
        changeNameAction: nameActionsBtnClick
      } =
        useMapActions(['incrementAction', 'changeNameAction'])
</script>

<template>
  <div class="mapActions">
    <h2>Actions组件当前计数: {{ $store.state.counter }}</h2>
    <button @click="counterActionsBtnClick">发起counterActions</button>
    <button @click="nameActionsBtnClick('jack')">发起nameActions</button>
  </div>
</template>

<style scoped></style>