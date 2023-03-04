<script setup>

</script>

<template>
  <div class="not-found">
    <!-- 如果想给用户反馈更精确的提示, 可以使用$route.params.pathMatch -->
    <h2>路径{{ $route.params.pathMatch }}不正确, 请输入正确的URL地址</h2>
  </div>
</template>

<style scoped>
.not-found {
  color: red;
}
</style>