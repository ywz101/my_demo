// 1.发起axios.request请求
// 如果没有指定method, 默认为get请求
// axios全部都会默认返回Promise, 所以可以直接在后面链式调用then
// res返回的是配置对象, 如果我们想直接获取具体的数据, 需要再.data
// axios.request({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then(res => {
//   console.log('res: ', res.data)
// })

// 2.发起axios.get请求
// 写法一: 在参数1, url中直接写完整的地址
// axios.get('https://httpbin.ceshiren.com/get?a=1&&b=2').then(res => {
//   console.log('getRes: ', res.data)
// })
// 写法二: 在参数1, url中只写根路径
// 参数2中写queryString
// axios.get('https://httpbin.ceshiren.com/get', {
//   params: {
//     a: 1,
//     b: 2
//   }
// }).then(res => {
//   console.log('getRes: ', res.data)
// })

// 3.发起axios的post请求
// 写法一: 参数1为url, 参数2为config
// axios.post('https://httpbin.ceshiren.com/post', {
//   name: 'coderwhy',
//   password: 123456
// }).then(res => {
//   console.log('postRES:', res.data)
// })
// 写法二: 参数1为url, 参数2为data对象
axios.post('https://httpbin.ceshiren.com/post', {
  data: {
    f1: 1,
    f2: 2
  }
}).then(res => {
  console.log('postRES:', res.data)
})