<template>
  <!-- <div>
    <div class="flex flex-row absolute left-0 top-[10rem] w-[65%]">
      <FilterButton
        v-for="type in toppingTypes"
        :key="type"
        :type="type"
        :filter="() => filter(type)"
      />
    </div>
    <div
      class="flex flex-wrap flex-row w-[65%] absolute left-0 top-[15rem] overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
      id="card-container"
    >
      <ToppingCards v-for="item in filtered" :key="item.name" :item="item" />
       :item is a prop and it expects a child component 
    </div>
  </div> -->
  <div class="absolute left-0 top-[10rem]">
    <label>Select Toppings:</label>
    <div v-for="type in toppingTypes" :key="type">
      <input type="checkbox" :id="type" :value="type" v-model="selectedTypes" @change="filter" />
      <label :for="type">{{ type }}</label>
    </div>

    <div>
      <ToppingCards v-for="item in filtered" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script setup>
/* import { ref, reactive } from 'vue'
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'
import FilterButton from './FilterButton.vue'
const toppingTypes = ['sprinkles', 'fruit', 'cookie', 'candy', 'syrup', 'nuts']

const filtered = ref([...items]) // Use ref for reactive array, can't update a const var if its a reactive for some reason; [items] puts an array in an array, [...items] puts the items in the array into a new array(?)

function filter(type) {
  console.log('filter clicked')
  filtered.value = items.filter((i) => i.type === type) //.value needed for ref but not reactive
} */
import { ref } from 'vue'
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'

const toppingTypes = ['sprinkles', 'fruit', 'cookie', 'candy', 'syrup', 'nuts']
const selectedTypes = ref([]) // Stores multiple selected checkboxes
const filtered = ref([...items]) // Reactive filtered array

function filter() {
  if (selectedTypes.value.length === 0) {
    filtered.value = [...items] // Show all if no filters are selected
  } else {
    filtered.value = items.filter((i) => selectedTypes.value.includes(i.type))
  }
}
</script>

<style scoped></style>
