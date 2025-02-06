<template>
  <div class="flex flex-wrap flex-row mx-auto w-[90%]">
    <CartItem v-for="item in cartItems" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cartItems } from '../items.js'
import CartItem from 'CartItem.vue'
</script>

<style scoped></style>
