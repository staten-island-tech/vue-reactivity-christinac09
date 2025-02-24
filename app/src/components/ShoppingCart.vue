<template>
  <div
    class="flex flex-wrap flex-row bg-[#d5bda5be] w-[35%] min-h-[80vh] absolute right-0 top-[10rem] overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
  >
    <h2 class="text-3xl text-center font-bold w-full m-2 mt-4">Your Bowl</h2>
    <h3 class="text-xl text-center w-full">Total Cost: ${{ cart.totalCost }}</h3>
    <h3 class="text-xl text-center w-full">Total Toppings: {{ cart.totalItems }}</h3>
    <TheBowl />
    <CartItem v-for="item in cart.items" :key="item.name" :item="item" :amount="item.amount" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
import TheBowl from './TheBowl.vue'
</script>

<style scoped></style>
