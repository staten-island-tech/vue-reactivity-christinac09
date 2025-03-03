<template>
  <div class="card compact bg-[#fae9da] w-80 m-4 mx-auto">
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3 class="text-[#53443d]">${{ item.price.toFixed(2) }}</h3>
      <h3 class="text-[#53443d]">{{ item.amount }} servings</h3>
    </div>
    <div class="card-actions justify-end mt-0 ml-0 mb-2 mr-2">
      <button @click="removeOne(item)" class="btn btn-primary" :id="item.name">Remove 1</button>
      <button @click="removeAll(item)" class="btn btn-primary" :id="item.name">Remove All</button>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../variables.js'
const props = defineProps({
  item: Object,
})
function removeOne(item) {
  item.amount--
  if (item.amount <= 0) {
    cart.items = cart.items.filter((thing) => thing.name !== i.name)
  }

  cart.totalCost -= item.price
  cart.totalCost = Math.round(cart.totalCost * 100) / 100
}
function removeAll(item) {
  cart.items = cart.items.filter((thing) => thing.name !== item.name)
  cart.totalItems--
  cart.totalCost -= item.price * item.amount
  cart.totalCost = Math.round(cart.totalCost * 100) / 100
}
</script>

<style scoped></style>
