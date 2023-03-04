<script setup>
defineProps({
  title: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="header-area">
    <h2 class="title">{{ title.title }}</h2>
    <h4 class="sub-title">{{ title.subtitle }}</h4>
  </div>
</template>

<style lang="less" scoped>
.header-area {
  height: 84px;

  .title {
    font: 700 22px '';
  } 

  .sub-title {
    margin-top: 12px;
    font-size: 16px;
  }
}
</style>