<script setup>
// import { useMapState } from '../hooks/useMapState'
import { useStore } from 'vuex'

// const { banners } = useMapState(['banners'])

const store = useStore()

store.dispatch('home/fetchHomeMultidata').then(res => {
  console.log(res)
})
</script>

<template>
  <div class="home">
    <ul>
      <template v-for="item in $store.state.home.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>