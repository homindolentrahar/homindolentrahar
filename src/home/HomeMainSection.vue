<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    class="flex justify-center items-center w-full h-[720px] bg-gradient-to-b dark:from-gray-950 from-white dark:to-gray-900 to-gray-100"
  >
    <div class="flex flex-col items-center w-10/12 md:w-8/12 xl:w-6/12 mx-auto">
      <span
        class="mb-3 lg:mb-6 pb-1 border-b-[2.5px] border-teal-600 dark:border-teal-500 self-start"
      >
        <h5
          class="text-sm md:text-[16px] font-semibold text-teal-600 dark:text-teal-500"
        >
          Available for Work
        </h5>
      </span>
      <h1
        class="text-5xl md:text-6xl font-bold text-gray-950 dark:text-white text-start self-start"
      >
        Hoi, I'm
        <span
          class="bg-gradient-to-r from-blue-600 dark:from-blue-500 to-cyan-500 dark:to-cyan-400 text-transparent bg-clip-text"
          >Rahar</span
        >diyan Widiatmoko.
      </h1>
      <p
        class="w-10/12 lg:w-8/12 text-sm md:text-[16px] text-gray-500 dark:text-gray-400 text-start mt-2 lg:mt-4 self-start"
      >
        Your modest Mobile Developer, specialize in Mobile Development, Mobile
        UI Design, and Web Development.
      </p>
      <div
        class="mt-8 lg:mt-10 w-full flex flex-col sm:flex-row items-start md:items-center gap-4"
      >
        <Button class="w-full sm:w-36" as-child>
          <RouterLink to="/projects"> View Projects </RouterLink>
        </Button>
        <Button variant="outline" class="w-full sm:w-36">Say Hi 👋</Button>
      </div>
    </div>
  </section>
</template>
