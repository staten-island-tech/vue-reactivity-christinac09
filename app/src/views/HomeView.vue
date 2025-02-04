<template>
  <main>
    <!-- <MenuList> </MenuList> -->
    <IngredientCards
      v-for="ingredient in ingredients"
      :key="ingredient.name"
      :ingredient="ingredient"
    />
  </main>
</template>

<script setup>
import IngredientCards from '../components/IngredientCards.vue'
import MenuList from '../components/MenuList.vue'
const ingredients = [
  { name: 'something', price: 5, image: 'placeholder.png' },
  { name: 'another thing', price: 10, image: 'placeholder.png' },
  { name: 'some other thing', price: 10, image: 'placeholder.png' },
]
</script>

<style scoped></style>
