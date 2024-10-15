<script setup lang="ts">
import ToolsIcon, { type ToolsData } from "./components/ToolsIcon.vue";
import WorkExperienceItem, {
  type WorkExperienceItemProps,
} from "./components/WorkExperienceItem.vue";

const tools: Array<ToolsData> = [
  {
    icon: "/public/android.svg",
    title: "Android",
  },
  {
    icon: "/public/flutter.svg",
    title: "Flutter",
  },
  {
    icon: "/public/go.svg",
    title: "Go",
  },
  {
    icon: "/public/figma.svg",
    title: "Figma",
  },
];
const experiences: Array<WorkExperienceItemProps> = [
  {
    title: "Mobile Developer",
    company: "Suitmedia Digital Agency",
    companyUrl: "google.com",
    type: "Freelance",
    description:
      "Develop and maintain mobile application for client, such as ITB, Sharp, EMC, and more",
  },
  {
    title: "Mobile Developer",
    company: "Suitmedia Digital Agency",
    companyUrl: "google.com",
    type: "Freelance",
    description:
      "Develop and maintain mobile application for client, such as ITB, Sharp, EMC, and more",
  },
];
</script>

<template>
  <section
    class="flex justify-center items-center w-full h-[720px] bg-white dark:bg-gray-950"
  >
    <div
      class="flex flex-col md:flex-row items-center w-10/12 gap-16 md:gap-28 mx-auto"
    >
      <div class="flex flex-col md:flex-grow w-full">
        <h1 class="text-5xl font-bold text-gray-950 dark:text-white">
          Experiences
        </h1>
        <p
          class="text-sm md:text-[16px] text-gray-500 dark:text-gray-400 text-start mt-2 lg:mt-4 self-start"
        >
          I have experience for over a year as Mobile Developer, starting as an
          intern, then took freelance gigs at digital agency and now as a
          full-time employee at a software house company. Experienced working
          remotely with flexible hour, yet still able to deliver the project on
          time.
        </p>
        <div class="flex flex-col gap-4">
          <span class="mt-4 lg:mt-6 flex flex-row items-center gap-2">
            <span class="h-1 w-8 bg-sky-600 dark:bg-sky-500"></span>
            <h5
              class="md:text-[16px] font-medium text-sky-600 dark:text-sky-500"
            >
              Tools
            </h5>
          </span>
          <div class="grid grid-cols-4 gap-4 md:gap-6">
            <ToolsIcon
              v-for="tool in tools"
              :key="tool.title"
              :icon="tool.icon"
              :title="tool.title"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 md:gap-6 md:flex-grow w-full">
        <WorkExperienceItem
          v-for="exp in experiences"
          :key="exp.title"
          v-bind="exp"
        />
      </div>
    </div>
  </section>
</template>
