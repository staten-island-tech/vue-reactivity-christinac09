<template>
  <div class="flex flex-wrap flex-row bg-red-400 w-[30vw] h-full absolute right-0 top-32">
    <CartItem v-for="item in cart.items" :key="item.name" :item="item" />
    <h2>Total Cost: ${{ cart.totalCost }}</h2>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
</script>

<style scoped></style>
