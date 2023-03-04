import { createStore } from 'vuex'
import { CHANGE_NAME } from '@/hooks/mutations_type'
import homeModule from '@/store/modules/home'

export const store = createStore({
  state: () => ({
    // 1.Vuex的状态存储是响应式的
    // 2.不能直接改变store中的状态
    counter: 100,
    name: 'ywz101',
    age: 18,
    friends: [
      { id: 100, name: 'kobe', age: 33 },
      { id: 101, name: 'james', age: 23 },
      { id: 102, name: 'nicholas', age: 43 },
    ],
    // 模拟数据
    // banners: [],
    // recommends: []
  }),
  // 类似于computed选项, 也有计算功能
  getters: {
    // 方法
    totalFriendsAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    getFriendById(state) {
      // 返回一个函数
      return id => {
        return state.friends.find(item => item.id === id)
      }
    },
    // 在getters可以有第二形参getters
    printInfo(state, getters) {
      return `姓名: ${state.name} - 年龄: ${state.age} - 朋友的年龄的总和: ${getters.totalFriendsAge} 岁`
    }
  },
  // 原则: 不要在mutations中进行异步操作, 如不要在此处发起网络请求  
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    // 方便我们追踪数据的状态
    changeName(state, payload) {
      state.name = payload
    },
    // changeBanners(state, payload) {
    //   state.banners = payload
    // },
    // changeRecommends(state, payload) {
    //   state.recommends = payload
    // }
  },
  // 处理异步操作
  actions: {
    // 方法
    // 形参: context
    incrementAction(context) {
      context.commit('increment')
    },
    changeNameAction(context, payload) {
      context.commit('changeName', payload)
    },
    // 异步方法
    // fetchHomeMultidata(context) {
    //   return new Promise(async (resolve, reject) => {
    //     const res = await fetch('http://123.207.32.32:8000/home/multidata')
    //     const props = await res.json()

    //     context.commit('changeBanners', props.data.banner.list)
    //     context.commit('changeRecommends', props.data.recommend.list)
    //     resolve('数据获取成功!')
    //   })
    // }
  },
  // 模块
  modules: {
    home: homeModule
  }
})