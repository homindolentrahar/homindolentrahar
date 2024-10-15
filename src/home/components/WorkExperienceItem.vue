<script lang="ts" setup>
export interface WorkExperienceItemProps {
  title: string;
  company: string;
  companyUrl: string;
  type: string;
  description: string;
}

defineProps<WorkExperienceItemProps>();
</script>

<template>
  <div
    class="flex flex-row px-6 py-4 rounded-md border border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out"
  >
    <div class="flex-grow">
      <h1 class="text-xl font-bold text-gray-950 dark:text-white">
        Mobile Developer
      </h1>
      <span class="flex flex-row items-center gap-1">
        <a
          href="google.com"
          class="text-sm font-medium underline underline-offset-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
        >
          Suitmedia Digital Agency
        </a>
        <i class="text-gray-700 dark:text-gray-400">•</i>
        <p class="text-sm font-medium text-gray-700 dark:text-gray-400">
          Freelance
        </p>
      </span>
      <p class="text-sm leading-[16px] text-gray-400 dark:text-gray-500 mt-2">
        Develop and maintain mobile application for client, such as ITB, Sharp,
        EMC, and more
      </p>
    </div>
  </div>
</template>
