<script lang="ts" setup>
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { NavArrowDown, NavArrowUp } from "@iconoir/vue";
import { ref } from "vue";

export interface WorkExperienceItemProps {
  title: string;
  company: string;
  companyUrl: string;
  type: string;
  description: string;
  startYear: number;
  endYear?: number;
}

const isOpen = ref(false);

defineProps<WorkExperienceItemProps>();
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    class="flex flex-col p-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-md transition-all duration-300 ease-in-out"
  >
    <div class="flex flex-row items-center gap-4">
      <span class="bg-gray-50 dark:bg-gray-900 p-4 w-fit h-fit rounded-lg">
        <h5 class="font-bold text-sm">
          {{ company.charAt(0) }}
        </h5>
      </span>
      <div class="flex flex-col flex-grow">
        <div class="flex flex-col flex-grow">
          <a
            :href="companyUrl"
            class="text-lg font-bold text-gray-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-500"
          >
            {{ company }}
          </a>
          <span class="flex flex-row items-center gap-1 mt-1">
            <h5
              class="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              {{ title }}
            </h5>
            <i class="text-gray-700 dark:text-gray-400">•</i>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-400">
              {{ type }}
            </p>
          </span>
        </div>

        <span
          class="flex flex-row text-xs font-medium text-gray-950 dark:text-white mt-[2px]"
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
      <Button variant="outline" size="icon">
        <CollapsibleTrigger as-child>
          <NavArrowDown v-if="!isOpen" class="size-5" />
          <NavArrowUp v-else class="size-5" />
        </CollapsibleTrigger>
      </Button>
    </div>
    <CollapsibleContent class="mt-2">
      <p class="text-gray-v-model:00 dark:text-gray-200 mt-2">
        {{ description }}
      </p>
    </CollapsibleContent>
  </Collapsible>
</template>
