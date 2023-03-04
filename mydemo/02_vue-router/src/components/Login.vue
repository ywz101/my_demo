<script setup>
import { useRouter } from 'vue-router'

const router = useRouter() 

const loginBtnClick = () => {
  // 本地存储
  localStorage.setItem('token', 'ywz101')

  // 跳转到订单push()
  router.push('/order')
}
</script>

<template>
  <div class="login">
    <h2>登录页面</h2>
    <button @click="loginBtnClick">登录</button>
  </div>
</template>

<style scoped></style>