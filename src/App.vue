<script setup lang="ts">
import TopNavbar from "./components/TopNavbar.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <TopNavbar />
    <main
      class="flex-grow flex justify-center items-center bg-white dark:bg-neutral-950"
    >
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-3xl text-neutral-950 dark:text-white font-semibold">
          homindolentrahar
        </h1>
        <p class="text-neutral-400">
          There is no such things as perfect, there is only better iteration
        </p>
      </div>
    </main>
  </div>
</template>
