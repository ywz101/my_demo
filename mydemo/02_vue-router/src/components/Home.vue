<script setup>
const logoutBtnClick = () => {
  localStorage.removeItem('token')
}
</script>

<template>
  <div class="home">
    <h2>Home组件</h2>
    <nav class="nav">
      <router-link to="/home/aaa">AAA</router-link>
      <router-link to="/home/bbb">BBB</router-link>
    </nav>
    <router-view></router-view>
    <button @click="logoutBtnClick">退出登录</button>
  </div>
</template>

<style scoped>
a {
  display: inline-block;
  width: 94px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background: #242424;
  color: #fff;
  text-decoration: none;
}

a:hover {
  background: #000;
}

.router-link-active {
  background: #000;
}

</style>