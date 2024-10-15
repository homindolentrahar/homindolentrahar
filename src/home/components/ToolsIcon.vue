<script setup lang="ts">
export interface ToolsData {
  icon: string;
  title: string;
}

defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <div
    class="bg-gray-50 dark:bg-gray-900 shadow-sm dark:shadow-none w-full rounded-md p-6 flex flex-col items-center gap-3"
  >
    <img :src="icon" :alt="title" class="size-6" />
    <p class="text-sm font-medium text-gray-800 dark:text-gray-200">
      {{ title }}
    </p>
  </div>
</template>
