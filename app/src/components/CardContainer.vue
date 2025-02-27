<template>
  <div>
    <div class="flex flex-row absolute left-0 top-[10rem] w-[64%] bg-[#d5bda5ca] m-2">
      <!-- should i make checkboxes/dropdown instead? -->
      <FilterButton
        v-for="type in toppingTypes"
        :key="type"
        :type="type.toUpperCase()"
        :filter="() => filter(type)"
      />
    </div>
    <div
      class="flex flex-wrap flex-row w-[65%] absolute left-0 top-[15rem] overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
      id="card-container"
    >
      <ToppingCards v-for="item in filtered" :key="item.name" :item="item" />
      <!-- :item is a prop and it expects a child component -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'
import FilterButton from './FilterButton.vue'
const toppingTypes = ['all', 'sprinkles', 'fruit', 'cookie', 'candy', 'syrup', 'nuts']

const filtered = ref([...items]) // Use ref for reactive array, can't update a const var if its a reactive for some reason; [items] puts an array in an array, [...items] puts the items in the array into a new array(?)

function filter(type) {
  if (type.toLowerCase() === 'all') {
    filtered.value = items
  } else {
    filtered.value = items.filter((i) => i.type === type.toLowerCase()) //.value needed for ref but not reactive
  }
}
</script>

<style scoped></style>
