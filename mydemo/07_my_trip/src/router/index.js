import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  // 采用哪种历史记录模式: HTML5模式
  history: createWebHistory(),
  // 配置映射关系
  routes: [
    // 重定向  
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../views/home/Home.vue')
    },
    {
      name: 'favor',
      path: '/favor',
      component: () => import('../views/favor/Favor.vue')
    },
    {
      name: 'order',
      path: '/order',
      component: () => import('../views/order/Order.vue')
    },
    {
      name: 'message',
      path: '/message',
      component: () => import('../views/message/Message.vue')
    }
  ]
})