<script setup>
import { useUser } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUser()

const { name, age, level } = storeToRefs(userStore)

const changeState = () => {
  // 1.基本用法
  // userStore.name = 'kobe'
  // userStore.age = 20
  // userStore.level = 200

  // 2.带有$都是内置的API
  // userStore.$patch({
  //   name: 'jack',
  //   age: 33,
  //   level: 103
  // })

  // 4.不能完全的替换state的对象, 因为它会破坏反应性
  userStore.$state = {
    name: 'james',
    level: 103
  }
}
// 3.重置$reset: 恢复到初始值
const resetState = () => {
  userStore.$reset()
}
</script>

<template>
  <div class="home2">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>等级: {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<style scoped></style>