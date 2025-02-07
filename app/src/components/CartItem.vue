<template>
  <div class="card bg-base-100 w-96 shadow-xl m-8">
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped></style>
