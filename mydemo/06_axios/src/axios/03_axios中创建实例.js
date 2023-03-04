// 创建axios的实例
const coderwhy = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 10000,
  headers: {}
})

// 1.使用coderwhy实例中的get请求
coderwhy.get('/home/multidata').then(res => {
  console.log('coderwhyRES:', res.data)
})

const ceshiren = axios.create({
  baseURL: 'https://httpbin.ceshiren.com',
  timeout: 10000,
  headers: {}
})

// 2.使用ceshiren实例中的get请求
ceshiren.get('/get').then(res => {
  console.log('ceshirenRES:', res.data)
})


// 3.使用ceshiren实例中的post请求
ceshiren.post('/post', {
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log('ceshirenPostRES:', res.data)
})