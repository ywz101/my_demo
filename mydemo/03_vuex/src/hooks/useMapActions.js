import { useStore, mapActions } from 'vuex'

export function useMapActions(map) { 
  // 1.获取仓库
  const store = useStore()
  // 2.使用mapState函数
  // map: 其实是映射关系
  // 返回值是函数(函数的本质是对象)
  const fns = mapActions(map)
  // 3.定义一个空对象, 取名为newState
  const newState = {}
  // 4.使用Object.keys(), 链式调用forEach()
  Object.keys(fns).forEach(key => {
    // value
    newState[key] = fns[key].bind({ $store: store })
  })
  // 5.返回newState
  return newState
}