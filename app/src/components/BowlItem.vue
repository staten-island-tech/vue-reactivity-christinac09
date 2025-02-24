<template>
  <div>
    <img :src="item.image" alt="" :id="item.name" class="absolute top-14 right-8 w-[85%] h-auto" />
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped></style>
