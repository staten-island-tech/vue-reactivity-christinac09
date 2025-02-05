<template>
  <div class="card bg-base-100 w-96 shadow-xl m-8">
    <figure>
      <img :src="item.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ item.name }}</h2>
      <h3>{{ item.price }}</h3>
      <div class="card-actions justify-end">
        <button @click="add" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
})
function add() {
  // ummm how to get cart here
}
</script>

<style scoped></style>
