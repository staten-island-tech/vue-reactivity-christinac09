<template>
  <div>
    <img :src="item.image" alt="" :id="item.name" class="absolute top-0 right-0 w-full h-auto" />
    <!-- does this make its position relative to parent? -->
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

<style scoped></style>
