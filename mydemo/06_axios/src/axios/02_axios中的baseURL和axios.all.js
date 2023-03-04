// 1.baseURL
const baseURL = 'http://123.207.32.32:8000'

// 2.axios.defaults: 默认配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 10000
axios.defaults.headers = {}

// 3.发起axios.get请求
// axios.get('/home/multidata').then(res => {
//   console.log('getRES:', res.data)
// })

// 4.发起多个请求axios.all()
// 内聚性会更好
// 本质是Promise.all()
axios.all([
  axios.get('/home/multidata'),
  // 当我们把url地址写全的时候, 就不再使用baseURL
  axios.get('https://httpbin.ceshiren.com/get')
]).then(res => {
  console.log('res:', res)
})