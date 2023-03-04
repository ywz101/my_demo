import { createRouter, createWebHistory } from 'vue-router'
// 普通形式导入组件

export const router = createRouter({
  // 采用什么历史模式: html5模式
  history: createWebHistory(),
  // 映射关系: 路由本质就是维护多个映射关系
  // router: 路由
  // route: 映射
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      // 路由的懒加载
      // 影响用户的首屏渲染速度
      // 魔法注释(类似于多行注释的语法/* */)
      component: () => import(/* webpackChunkName: 'home' */'../components/Home.vue'),
      // 路由嵌套
      children: [
        {
          path: '/home',
          redirect: '/home/aaa'
        },
        {
          name: 'aaa',
          path: 'aaa',
          component: () => import('../components/AAA.vue')
        },
        {
          name: 'bbb',
          path: 'bbb',
          component: () => import('../components/BBB.vue')
        }
      ]
    },
    {
      name: 'about',
      path: '/about',
      component: () => import(/* webpackChunkName: 'about' */'../components/About.vue')
    },
    {
      name: 'user',
      // 动态id
      path: '/user/:id',
      component: () => import(/* webpackChunkName: 'user' */'../components/User.vue')
    },
    {
      name: 'order',
      // 动态id
      path: '/order',
      component: () => import(/* webpackChunkName: 'order' */'../components/Order.vue')
    },
    {
      name: 'login',
      // 动态id
      path: '/login',
      component: () => import(/* webpackChunkName: 'order' */'../components/Login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import(/* webpackChunkName: 'not-found' */'../components/NotFound.vue')
    }
  ]
})

// 动态添加路由
let isAdmin = true
if (isAdmin) {
  router.addRoute({
    // 1级路由
    path: '/admin',
    component: () => import('../components/Admin.vue')
  })

  // 2级路由
  // 参数1: (父路由)的名字
  // 参数2: 正常的配置(映射关系)
  router.addRoute('home', {
    path: 'ccc',
    component: () => import('../components/CCC.vue')
  })
}

// 导航守卫
// 接受一个回调函数
// 参数1: to (跳转到哪个导航)
// 参数2: from (来自哪个导航)
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')

  // 获取token
  // 如果跳转到order导航, 并且没有token
  if (to.path === '/order' && !token) {
    return '/login'
  }
})