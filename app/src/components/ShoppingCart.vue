<template>
  <div class="flex flex-wrap flex-row mx-auto bg-blue">
    <CartItem v-for="item in cartItems" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CartItem from './CartItem.vue'
</script>

<style scoped></style>
