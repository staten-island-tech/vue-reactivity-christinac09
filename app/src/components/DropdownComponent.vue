<template>
  <div class="card w-80 m-4 h-[3rem]">
    <select @change="onSelect" :value="modelValue" class="btn btn-primary my-auto">
      <option value="" disabled class="text-[#d5bda5be]">Select an option</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  options: Array,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const onSelect = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
