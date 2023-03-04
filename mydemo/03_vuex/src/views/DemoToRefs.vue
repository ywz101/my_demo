<script setup>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'


// 获取store
const store = useStore()

// 使用mapState: 返回的是函数
// 参数: 数组 || 对象
// 此时name和age是函数
const { name, age } = mapState(['name', 'age'])
// 修改vue底层默认的this指向, 并且用computed函数将数据转为响应式的
const cName = computed(name.bind({ $store: store }))
const cAge = computed(age.bind({ $store: store }))
</script>

<template>
  <div class="demo">
    <!-- 1.普通写法: 表达式长的那种 -->
    <h2>姓名: {{ $store.state.name }}</h2>
    <h2>年龄: {{ $store.state.age }}</h2>

    <!-- 2.使用mapState内置函数 -->
    <hr>
    <h2>姓名: {{ cName }}</h2>
    <h2>年龄: {{ cAge }}</h2>
    <hr>
    <hr>
  </div>
</template>

<style scoped></style>