<template>
  <div class="flex flex-wrap flex-row bg-red-400 w-[30vw] h-full absolute right-0 top-32">
    <h2>Shopping Cart</h2>
    <EmptyBowl />
    <CartItem v-for="item in cart.items" :key="item.name" :item="item" />
    <h3 class="text-xl">Total Cost: ${{ cart.totalCost }}</h3>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
import EmptyBowl from './EmptyBowl.vue'
</script>

<style scoped></style>
