import { defineStore } from 'pinia'

export const useHome = defineStore('home', {
  state: () => ({
    // 服务器数据
    banners: [],
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()

      this.banners = data.data.banner.list
      return '数据下载成功'
    }
  }
})
