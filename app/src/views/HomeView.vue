<template>
  <main>
    <MenuItems v-for="item in items" :key="item.name" />
  </main>
</template>

<script setup>
import MenuItems from '../components/MenuItem.vue'
const items = [{ name: 'test', price: 5 }]
</script>

<style scoped></style>
