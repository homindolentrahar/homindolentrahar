<script lang="ts" setup>
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <RouterLink
    :to="`/projects/` + Math.floor(Math.random() * 100)"
    class="flex flex-row items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 dark:hover:bg-gray-900 rounded-md hover:shadow dark:hover:shadow-none group cursor-pointer transition-all duration-300 ease-in-out"
  >
    <img
      src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="project image"
      class="w-32 h-20 rounded-md object-cover"
    />
    <div class="flex flex-col flex-grow">
      <div class="flex flex-row justify-between items-center">
        <Badge variant="secondary" class="rounded-md">Web Dev</Badge>
        <p class="text-xs text-gray-400 dark:text-gray-500">05 Jul 2024</p>
      </div>
      <h5 class="font-semibold text-gray-950 dark:text-white line-clamp-1 mt-3">
        Website Kemenpar Revamp: Holiday in Indonesia
      </h5>
      <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
        Redesigning the official website of Kemenpar to promote tourism in
        Indonesia. Took about 6 months to finish.
      </p>
    </div>
  </RouterLink>
</template>
