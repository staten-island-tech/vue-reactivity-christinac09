<template>
  <div class="flex flex-wrap flex-row mx-auto w-[90%] bg-red-50" id="menu-items">
    <IngredientCards v-for="item in items" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { items } from '../items.js'
import IngredientCards from '../components/IngredientCard.vue'

/* export default {
  components: { Card },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
 */
</script>

<style scoped></style>
