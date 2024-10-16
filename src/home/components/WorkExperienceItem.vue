<script lang="ts" setup>
export interface WorkExperienceItemProps {
  title: string;
  company: string;
  companyUrl: string;
  type: string;
  description: string;
  startYear: number;
  endYear?: number;
}

defineProps<WorkExperienceItemProps>();
</script>

<template>
  <div
    class="flex flex-col px-6 py-4 rounded-md bg-gray-50 dark:bg-gray-900 shadow-sm dark:shadow-none transition-all duration-300 ease-in-out"
  >
    <div class="flex flex-row">
      <div class="flex flex-col flex-grow">
        <h1 class="text-xl font-bold text-gray-950 dark:text-white">
          {{ title }}
        </h1>
        <span class="flex flex-row items-center gap-1">
          <a
            :href="companyUrl"
            class="text-sm font-medium underline underline-offset-2 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >{{ company }}</a
          >
          <i class="text-gray-700 dark:text-gray-400">•</i>
          <p class="text-sm font-medium text-gray-700 dark:text-gray-400">
            {{ type }}
          </p>
        </span>
      </div>
      <span
        class="flex flex-row text-xs font-medium text-gray-950 dark:text-white"
      >
        <p>
          {{ startYear }}
        </p>
        <p>&nbsp;-&nbsp;</p>
        <p>
          {{ endYear ?? "Now" }}
        </p>
      </span>
    </div>

    <p class="text-sm leading-[16px] text-gray-400 dark:text-gray-500 mt-2">
      {{ description }}
    </p>
  </div>
</template>
