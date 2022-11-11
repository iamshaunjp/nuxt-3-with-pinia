import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    async getCart() {
      const data = await $fetch('http://localhost:4000/cart')
      this.cart = data
      console.log(this.cart)
    },
  }
})