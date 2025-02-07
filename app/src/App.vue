<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-[10vh] bg-blue-50">
    <div class="absolute top-0 left-0 bg-yellow-200 w-full h-[20%]">
      <h1 class="text-center text-2xl">Title</h1>
      <p class="text-center">about</p>
    </div>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
</template>

<style scoped></style>
