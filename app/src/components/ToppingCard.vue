<template>
  <div class="card bg-[#d5bda5be] w-60 m-8">
    <figure>
      <img :src="item.image" alt="Shoes" class="mt-2" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>Type: {{ item.type }}</p>
      <p>Price: ${{ item.price.toFixed(2) }}</p>
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
  // why is this
  // add image to the cake
  if (cart.items.includes(item)) {
    alert('this is already in the cart')
  } else {
    cart.items.push(item)
    cart.totalItems++
    cart.totalCost += item.price
    cart.totalCost = Math.round(cart.totalCost * 100) / 100
    console.log(cart)
  }
}
</script>

<style scoped></style>
