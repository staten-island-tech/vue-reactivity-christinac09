<template>
  <div
    class="flex flex-wrap flex-row mx-auto w-[90%] bg-red-50 absolute left-0 top-100"
    id="card-container"
  >
    <IngredientCards v-for="item in items" :key="item.name" :item="item" />
    <!-- :item is a prop and it expects a child component -->
  </div>
</template>

<script setup>
import { items } from '../items.js'
import IngredientCards from './IngredientCard.vue'
</script>

<style scoped></style>
