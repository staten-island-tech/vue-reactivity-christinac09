<template>
  <div class="card bg-[#d5bda5be] w-60 m-8">
    <figure>
      <img :src="item.image" :alt="item.name" class="mt-2" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <p>Type: {{ item.type }}</p>
      <p class="text-[#53443d]">Price: ${{ item.price.toFixed(2) }}</p>
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
  let exists = cart.items.find((i) => i.name === item.name)
  if (exists) {
    //alert('one more serving added')
    cart.items.forEach((i) => {
      if (i.name === item.name) {
        i.amount++
        cart.totalCost += item.price
        cart.totalCost = Math.round(cart.totalCost * 100) / 100
      }
    })
  } else {
    const theItem = { name: item.name, amount: 1, price: item.price, image: item.image }
    cart.items.push(theItem)
    cart.totalItems++
    cart.totalCost += item.price
    cart.totalCost = Math.round(cart.totalCost * 100) / 100
  }
}
</script>

<style scoped></style>
