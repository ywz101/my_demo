import axios from 'axios'

// 简洁封装的目的: 有效的降低耦合度, 提高可维护性
class Ywz101Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  // 封装request实例
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  // 封装get实例
  get(config) {
    return this.request({
      ...config,
      method: 'GET'
    })
  }
  // 封装post实例
  post(config) {
    return this.request({
      ...config,
      method: 'POST'
    })
  }
}
const ceshiren = 'https://httpbin.ceshiren.com'

export default new Ywz101Request(ceshiren)