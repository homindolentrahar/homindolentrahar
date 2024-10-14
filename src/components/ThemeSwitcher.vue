<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
// import { HalfMoon, SunLight } from "@iconoir/vue";
import { Switch } from "./ui/switch";

const isDark = useDark({
  disableTransition: false,
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <!-- <button
    @click="toggleDark()"
    class="p-2 self-center border border-neutral-200 dark:border-neutral-800 rounded-md cursor-pointer bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 ease-in-out"
  >
    <SunLight
      v-if="isDark"
      class="size-4 text-neutral-500 dark:text-neutral-400"
    />
    <HalfMoon v-else class="size-4 text-neutral-500 dark:text-neutral-400" />
  </button> -->
  <Switch v-on:update:checked="toggleDark" :checked="isDark" />
</template>
