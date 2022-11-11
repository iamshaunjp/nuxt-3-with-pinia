<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.title">
    <div>
      <p class="text-2xl text-secondary">{{product.title}}</p>
      <p class="text-xl text-gray-50">{{product.description}}</p>
      <p class="text-lg text-secondary my-3">{{product.price}} Silver Coins</p>
      <button class="btn" @click="addToBasket()">
        <span>Add to Basket</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useCartStore } from '../stores/cartStore'

  const { product } = defineProps(['product'])

  const cartStore = useCartStore()

  const addToBasket = async () => {
    await cartStore.addToCart(product)
  }
</script>