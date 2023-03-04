import { defineStore } from 'pinia'
import { useUser } from '@/stores/user'

export const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    firends: [
      { id: 111, name: 'AAA' },
      { id: 112, name: 'BBB' },
      { id: 113, name: 'CCC' },
    ]
  }),
  getters: {
    // this就是store的实例
    doubleCount(state) {
      return state.count * 2
    },
    doubleCountAddOne() {
      return this.doubleCount + 1
    },
    getFriendById() {
      return id => {
        return this.firends.find(item => item.id === id)
      }
    },
    // 从其他的仓库中获取数据并且拼接
    printInfo(state) {
      // 让其他的仓库生效
      const userStore = useUser()

      return `姓名: ${userStore.name} 计数: ${state.count}`
    }
  },
  actions: {
    increment() {
      return this.count++
    },
    incrementTen(payload) {
      return this.count += payload
    }
  }
})