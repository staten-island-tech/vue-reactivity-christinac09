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
  let exists = false
  cart.items.forEach((i) => {
    if (i.name === item.name) {
      exists = true
    }
  })
  if (exists) {
    //alert('one more serving added')
    cart.items.forEach((i) => {
      console.log(i.name)
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
    console.log(cart)
  }
}
</script>

<style scoped></style>
