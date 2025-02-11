<template>
  <div class="bg-white w-[30vw] h-20 absolute right-0 top-32">
    <CanvasItem v-for="item in cart.items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
import CanvasItem from './CanvasItem.vue'
</script>

<style scoped></style>
