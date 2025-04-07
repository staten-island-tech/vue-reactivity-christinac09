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
      <!-- <DropdownComponent :options="toppingTypes" v-model="selected" /> -->
    </div>
    <div
      class="flex flex-wrap flex-row w-[65%] absolute left-0 top-[15rem] overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
      id="card-container"
    >
      <ToppingCards v-for="item in filtered" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { items } from '../toppings.js'
import ToppingCards from './ToppingCard.vue'
import FilterButton from './FilterButton.vue'
import DropdownComponent from '../components/DropdownComponent.vue'
const toppingTypes = ['all', 'sprinkles', 'fruit', 'cookie', 'candy', 'syrup', 'nuts']

const filtered = ref([...items]) // Use ref for reactive array, can't update a const var if its a reactive for some reason; [items] puts an array in an array, [...items] puts the items in the array into a new array(?)

function filter(type) {
  if (type.toLowerCase() === 'all') {
    filtered.value = items
  } else {
    filtered.value = items.filter((i) => i.type === type.toLowerCase()) //.value needed for ref but not reactive
  }
}
/* 
const selected = ref('')
const filtered2 = computed(() => {
  return items.filter((i) => {
    return (
      selected.value === 'all' || // both 'All' and '' return all, '' is from unchanged ref variable when nothing is selected
      selected.value === '' ||
      i.type === selected.value
    )
  })
}) */
</script>

<style scoped></style>
