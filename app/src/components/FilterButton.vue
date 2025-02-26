<template>
  <div class="card compact bg-base-100 w-80 shadow-xl m-4 h-[3rem]">
    <button @click="filter" class="my-auto">{{ type }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  filter: Function,
})
</script>

<style scoped></style>
