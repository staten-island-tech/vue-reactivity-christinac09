<template>
  <div class="relative">
    <img src="/bowl.png" alt="" class="w-full h-auto" />
    <BowlItem v-for="item in cart.items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import BowlItem from './BowlItem.vue'
</script>

<style scoped></style>
