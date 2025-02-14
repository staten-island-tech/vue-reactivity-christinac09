<template>
  <div class="w-[30vw] relative">
    <img src="/bowl.png" alt="" class="w-full h-auto" />
    <CanvasItem v-for="item in cart.items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CanvasItem from './BowlItem.vue'
</script>

<style scoped></style>
