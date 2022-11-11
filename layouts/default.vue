<template>
  <div class="m-8">
    
    <header class="wrapper flex justify-between">
      <NuxtLink to="/">
        <h1 class="text-secondary text-5xl">Adventure Store</h1>
      </NuxtLink>
      <NuxtLink to="/cart">
        <span class="material-icons-outlined text-secondary text-5xl">
          shopping_bag
        </span>
      </NuxtLink>
    </header>

    <div class="wrapper">
      <slot />
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>

</style>