<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="absolute top-0 left-0 bg-orange-400 w-full h-32">
      <h1 class="text-center text-2xl">Title</h1>
      <p class="text-center">about</p>
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
