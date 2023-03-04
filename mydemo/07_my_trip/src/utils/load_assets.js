export const getAssetURL = image => {
  // 参数1: 相对路径
  // 参数2: 当前路径
  return new URL(`../assets/img/tabbar/${image}`, import.meta.url).href
}