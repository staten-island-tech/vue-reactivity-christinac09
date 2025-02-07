<template>
  <div class="flex flex-wrap flex-row mx-auto bg-green">
    <CartItem v-for="item in cart.items" :key="item.name" :item="item" />
    <h2>Total Cost: ${{ cart.totalCost }}</h2>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
</script>

<style scoped></style>
