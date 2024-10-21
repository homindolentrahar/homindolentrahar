<script lang="ts" setup></script>

<template>
  <div
    class="flex flex-col p-4 h-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm dark:shadow-none"
  >
    <img
      src="https://images.unsplash.com/photo-1726853546098-380e29da9e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="project image"
      class="rounded-md w-full h-44 object-cover"
    />
    <div class="flex flex-col mt-4">
      <p class="text-sm text-gray-400 dark:text-gray-500 line-clamp-1">
        Front-End Web
      </p>
      <h5
        class="font-semibold text-lg text-gray-950 dark:text-white line-clamp-1 mt-1"
      >
        Website Kemenpar Revamp: Holiday in Indonesia
      </h5>
      <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        Redesigning the official website of Kemenpar to promote tourism in
        Indonesia. Took about 6 months to finish.
      </p>
      <RouterLink
        :to="`/projects/` + Math.floor(Math.random() * 100)"
        class="mt-4 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline hover:underline-offset-4 cursor-pointer"
      >
        View Detail
      </RouterLink>
    </div>
  </div>
</template>
