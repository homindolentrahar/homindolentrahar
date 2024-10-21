<script lang="ts" setup>
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <div
    class="flex flex-col gap-3 border border-gray-200 dark:border-gray-800 rounded-md transition-all duration-300 ease-in-out p-4"
  >
    <img
      src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="project image"
      class="rounded-md w-full h-32 sm:h-36 lg:h-44 object-cover"
    />
    <div class="flex flex-col flex-grow">
      <div class="flex flex-row justify-between items-center">
        <Badge variant="secondary" class="rounded-md">Web Dev</Badge>
        <p class="text-xs text-gray-400 dark:text-gray-500">05 Jul 2024</p>
      </div>
      <div class="mt-3 flex-grow">
        <h5
          class="font-semibold text-lg text-gray-950 dark:text-white line-clamp-2"
        >
          Website Kemenpar Revamp: Holiday in Indonesia
        </h5>
        <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          Redesigning the official website of Kemenpar to promote tourism in
          Indonesia. Took about 6 months to finish.
        </p>
      </div>
      <RouterLink
        :to="`/projects/` + Math.floor(Math.random() * 100)"
        class="mt-4 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline hover:underline-offset-4 cursor-pointer"
        >Read More</RouterLink
      >
    </div>
  </div>
</template>
