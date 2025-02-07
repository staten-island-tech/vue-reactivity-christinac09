<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-[5%]">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
