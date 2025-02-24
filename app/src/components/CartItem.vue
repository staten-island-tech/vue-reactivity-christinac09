<template>
  <div class="card compact bg-base-100 w-80 shadow-xl m-4 mx-auto">
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>${{ item.price }}</h3>
    </div>
    <div class="card-actions justify-end mt-0 ml-0 mb-2 mr-2">
      <button @click="removeFromCart(item)" class="btn btn-primary" :id="item.name">Remove</button>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
const props = defineProps({
  item: Object,
})
function removeFromCart(item) {
  console.log('remove btn clicked')
  cart.items = cart.items.filter((thing) => thing.name !== item.name)
  cart.totalItems--
  cart.totalCost -= item.price
  cart.totalCost = Math.round(cart.totalCost * 100) / 100
  console.log(cart)
}
</script>

<style scoped></style>
