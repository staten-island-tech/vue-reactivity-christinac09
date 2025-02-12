<template>
  <main>
    <CardContainer> </CardContainer>
    <EmptyBowl />
    <ShoppingCart />
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import CardContainer from '../components/CardContainer.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import EmptyBowl from '@/components/EmptyBowl.vue'
</script>

<style scoped></style>
