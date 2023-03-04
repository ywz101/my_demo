<script setup>
const homeBtnClilck = () => {
  console.log('按钮被点击了')
}

defineExpose({
  homeBtnClilck
})
</script>

<template>
  <div class="home">
    <h2>Home组件中的h2元素</h2>
    <button @click="homeBtnClilck">按钮</button>
  </div>
</template>

<style scoped></style>