<template>
  <div class="flex flex-wrap flex-row w-[65%] absolute left-0 top-[10rem] overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200" id="card-container">
    <ToppingCards v-for="item in items" :key="item.name" :item="item" />
    <!-- :item is a prop and it expects a child component -->
  </div>
</template>

<script setup>
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'
</script>

<style scoped></style>
