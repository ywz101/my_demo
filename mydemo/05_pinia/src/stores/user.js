import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({
    name: 'ywz101',
    age: 18,
    level: 100
  })
})