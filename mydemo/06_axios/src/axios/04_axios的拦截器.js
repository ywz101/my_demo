// axios的拦截器
// 1.请求拦截器
axios.interceptors.request.use(
  // 参数1: 请求成功的回调
    (config) => {
      // (1)如loading动画的加载
      // (2)config配置
      console.log('请求拦截成功~')
      return config
    },
  // 参数2: 请求失败的回调
    (err) => {
      console.log('请求拦截失败~')
      return err
    }
  )
  // 2.响应拦截器
  axios.interceptors.response.use(
    // 参数1: 响应成功的回调
      (res) => {
        // (1)如loading动画的加载
        // (2)config配置
        console.log('响应拦截成功~')
        return res.data
      },
    // 参数2: 响应失败的回调
      (err) => {
        console.log('响应拦截失败~')
        return err
      }
    )
  
  axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    console.log('res:', res)
  })