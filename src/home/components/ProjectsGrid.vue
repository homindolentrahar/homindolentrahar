<script lang="ts" setup>
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
</script>

<template>
  <ScrollArea class="w-full h-80 xl:h-[400px]">
    <div
      class="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 place-content-start"
    >
      <div
        v-for="n in 12"
        :key="n"
        class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-none h-56 xl:h-72 rounded-md p-4"
      >
        <div class="flex flex-col gap-4 h-full">
          <img
            src="https://images.unsplash.com/photo-1729044932330-fdbc56ecef4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-full h-3/6 object-cover rounded-md"
          />
          <div class="flex flex-col">
            <p class="text-xs text-gray-400 dark:text-gray-600 line-clamp-1">
              Front-end Web
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
            <Button variant="link" class="self-start">View Details</Button>
          </div>
        </div>
      </div>
    </div>
  </ScrollArea>
</template>
