<template>
  <div class="card w-80 m-4 h-[3rem]">
    <button @click="filter" class="btn btn-primary my-auto">{{ type }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  filter: Function,
})
</script>

<style scoped></style>
