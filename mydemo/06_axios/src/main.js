import { createApp } from 'vue'
import App from './App.vue'
import Ywz101Request from '@/service'

createApp(App).mount('#app')

Ywz101Request.get({
  url: '/get',
  params: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log('getRES:', res)
})

Ywz101Request.post({
  url: '/post',
  data: {
    f1: 1,
    f2: 2
  }
}).then(res => {
  console.log('postRES:', res)
})