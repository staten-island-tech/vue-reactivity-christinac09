<template>
  <div class="card bg-base-100 w-80 shadow-xl m-8">
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
    </div>
    <button @click="removeFromCart(item)" class="btn btn-primary" :id="item.name">Remove</button>
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
  console.log(cart)
}
</script>

<style scoped></style>
