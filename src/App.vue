<script setup lang="ts">
import TopNavbar from "./components/TopNavbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen flex flex-col">
    <TopNavbar />
    <main class="flex-grow bg-white dark:bg-gray-950">
      <RouterView class="h-full" />
    </main>
  </div>
</template>
