<template>
  <div class="card bg-base-100 w-60 shadow-xl m-8">
    <figure>
      <img :src="item.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>Type: {{ item.type }}</p>
      <p>Price: {{ item.price }}</p>
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
    console.log(cart)
  }
}
</script>

<style scoped></style>
