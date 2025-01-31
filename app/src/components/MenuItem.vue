<template>
  <div>
    <h2>{{ item.name }}</h2>
    <h3>{{ item.price }}</h3>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>

<style scoped></style>
