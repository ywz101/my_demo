<script setup>

</script>

<template>
  <div class="app">
    <!-- router-link((本质就是)a元素) -->
    <!-- 可以给动态生成的css类名, 取别名 -->
    <router-link to="/home" active-class="active">首页</router-link>
    <router-link to="/about"  active-class="active">关于</router-link>
    <router-link to="/user/123"  active-class="active">用户123</router-link>
    <router-link to="/user/321"  active-class="active">用户321</router-link>
    <router-link to="/order"  active-class="active">订单</router-link>
    <router-link to="/login"  active-class="active">登录页面</router-link>
    <!-- router-view(占位视图) -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.active {
  color: red;
  font-size: 24px;
}
</style>