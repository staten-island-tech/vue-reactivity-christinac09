<template>
  <main>
    <MenuItems v-for="item in items" :key="item.name" :item="item" />
  </main>
</template>

<script setup>
import MenuItems from '../components/MenuItem.vue'
const items = [
  { name: 'something', price: 5, image: 'placeholder.jpg' },
  { name: 'another thing', price: 10, image: 'placeholder.jpg' },
]
</script>

<style scoped></style>
