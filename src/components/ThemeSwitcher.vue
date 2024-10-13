<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { HalfMoon, SunLight } from "@iconoir/vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    class="p-2 self-center border border-neutral-200 dark:border-neutral-800 rounded-md cursor-pointer bg-white dark:bg-neutral-950 hover:bg-neutral-100 transition-all duration-300 ease-in-out"
  >
    <HalfMoon class="size-4 text-neutral-500 dark:text-neutral-400" />
  </button>
</template>
