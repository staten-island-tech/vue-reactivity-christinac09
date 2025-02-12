<template>
  <div class="bg-white w-[30vw] h-100 absolute right-0 top-32">
    <img src="/bowl.png" alt="" />
    <CanvasItem v-for="item in cart.items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CanvasItem from './BowlItem.vue'
</script>

<style scoped></style>
