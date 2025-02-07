<template>
  <div class="card bg-base-100 w-96 shadow-xl m-8">
    <figure>
      <img :src="item.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
      <div class="card-actions justify-end">
        <button @click="addToCart(item)" class="btn btn-primary" :id="item.name">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
const props = defineProps({
  item: Object,
})
function addToCart(item) {
  console.log('add btn clicked')
  cart.items.push(item)
  cart.totalItems++
  cart.totalCost += item.price
  console.log(cart) // why is this weird
}
</script>

<style scoped></style>
