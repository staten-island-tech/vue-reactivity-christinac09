<template>
  <div class="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img :src="item.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>

<style scoped></style>
