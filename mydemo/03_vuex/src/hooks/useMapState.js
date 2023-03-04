// import { computed } from 'vue'
// import { useStore, mapGetters } from 'vuex'

// export function useMapState(map) {
//   // 1.获取仓库
//   const store = useStore()
//   // 2.使用mapGetters函数
//   const fns = mapGetters(map)
//   // 3.定义一个空对象
//   const newState = {}
//   // 4.Object.keys().forEach()
//   Object.keys(fns).forEach(key => {
//     newState[key] = computed(fns[key].bind({ $store: store }))
//   })
//   // 5.返回newState
//   return newState
// }

import { computed } from 'vue'
import { useStore, mapState } from 'vuex'

export function useMapState(map) { 
  // 1.获取仓库
  const store = useStore()
  // 2.使用mapState函数
  // map: 其实是映射关系
  // 返回值是函数(函数的本质是对象)
  const fns = mapState(map)
  // 3.定义一个空对象, 取名为newState
  const newState = {}
  // 4.使用Object.keys(), 链式调用forEach()
  Object.keys(fns).forEach(key => {
    // value
    newState[key] = computed(fns[key].bind({ $store: store }))
  })
  // 5.返回newState
  return newState
}