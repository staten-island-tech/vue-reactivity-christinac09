<template>
  <div class="flex flex-wrap flex-row bg-red-400 w-[30vw] absolute right-0 top-32">
    <h2 class="text-xl text-center w-full">Shopping Cart</h2>
    <h3 class="text-xl text-center w-full">Total Cost: ${{ cart.totalCost }}</h3>
    <TheBowl />
    <CartItem v-for="item in cart.items" :key="item.name" :item="item" />
    
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
import TheBowl from './TheBowl.vue'
</script>

<style scoped></style>
