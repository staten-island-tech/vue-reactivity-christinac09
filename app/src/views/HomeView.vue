<template>
  <main>
    <CardContainer> </CardContainer>
    <BlankCanvas />
    <!-- <ShoppingCart /> -->
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import CardContainer from '../components/CardContainer.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import BlankCanvas from '@/components/BlankCanvas.vue'
</script>

<style scoped></style>
