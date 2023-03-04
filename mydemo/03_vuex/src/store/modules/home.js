export default {
  // 1102集
  // 命名空间没有开启
  namespaced: true,
  state: () => ({
    // 服务器数据
    banners: [],
    recommends: []
  }),
  mutations: {
    changeBanners(state, payload) {
      state.banners = payload
    },
    changeRecommends(state, payload) {
      state.recommends = payload
    }
  },
  actions: {
    // 异步方法
    fetchHomeMultidata(context) {
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata')
        const props = await res.json()

        context.commit('changeBanners', props.data.banner.list)
        context.commit('changeRecommends', props.data.recommend.list)
        resolve('数据获取成功!')
      })
    }
  }
}