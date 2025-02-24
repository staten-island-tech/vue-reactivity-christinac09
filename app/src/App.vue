<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="absolute top-0 left-0 bg-[#e3baa7] w-full h-[10rem]">
      <h1 class="text-center text-4xl font-bold mt-10">Make Your Own Yogurt Bowl</h1>
      <p class="text-center font-medium my-7">add as many servings as you want for each topping</p>
      <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
