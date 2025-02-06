<template>
  <div class="">
    <h2>{{ item.name }}</h2>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
})
</script>

<style scoped></style>
