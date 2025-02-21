<template>
  <div class="flex flex-wrap flex-row w-[70%] absolute left-0 top-32" id="card-container">
    <ToppingCards v-for="item in items" :key="item.name" :item="item" />
    <!-- :item is a prop and it expects a child component -->
  </div>
</template>

<script setup>
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'
</script>

<style scoped></style>
