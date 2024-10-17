<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Download,
  CodeBrackets,
  EvPlugCharging,
  Network,
  Instagram,
  X,
  Github,
  Linkedin,
} from "@iconoir/vue";
import type { Component } from "vue";

interface Excellence {
  icon: Component;
  title: string;
}

interface ReachMeData {
  icon: Component;
  url: string;
  title: string;
}

const roles = [
  "Android Developer",
  "Flutter Developer",
  "Frontend Developer",
  "Backend Developer",
  "Backend Developer",
];
const excellences: Array<Excellence> = [
  {
    icon: CodeBrackets,
    title: "Detail Oriented",
  },
  {
    icon: EvPlugCharging,
    title: "Fast Learner",
  },
  {
    icon: Network,
    title: "Remote Battle-tested",
  },
];
const contacts: Array<ReachMeData> = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/homindolentrahar",
    title: "Instagram",
  },
  {
    icon: X,
    url: "https://www.x.com/homindolentrhar",
    title: "X",
  },
  {
    icon: Github,
    url: "https://www.github.com/homindolentrahar",
    title: "Github",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/rahardiyan-eko-widiatmoko/",
    title: "LinkedIn",
  },
];
</script>

<template>
  <section
    class="flex justify-center items-center w-full py-20 lg:h-[720px] bg-gradient-to-r from-blue-50 dark:from-gray-900 to-white dark:to-gray-950"
  >
    <div class="flex flex-col items-start w-10/12 md:w-8/12 xl:w-6/12 mx-auto">
      <span
        class="mb-5 text-sm text-gray-950 dark:text-white font-medium px-4 py-[6px] rounded-full border-2 border-gray-950 dark:border-white"
        >{{ roles[0] }}</span
      >
      <h1 class="text-4xl md:text-5xl font-bold text-gray-950 dark:text-white">
        Detail-oriented developer with passion for building
        <span
          class="bg-gradient-to-r from-pink-600 dark:from-pink-500 to-fuchsia-500 dark:to-fuchsia-400 bg-clip-text"
          ><b class="text-transparent">beautiful</b></span
        >
        and
        <span
          class="bg-gradient-to-r from-red-600 dark:from-red-500 to-orange-500 dark:to-orange-400 bg-clip-text"
          ><b class="text-transparent">robust</b></span
        >
        products.
      </h1>
      <div
        class="flex flex-col sm:flex-row w-full items-center gap-4 sm:gap-6 mt-10"
      >
        <Button class="flex flex-row items-center gap-1 w-full sm:w-fit"
          >Download Resume
          <Download class="size-4" />
        </Button>
        <p class="font-medium text-gray-500 dark:text-gray-400">or</p>
        <div class="flex flex-row gap-10 sm:gap-4">
          <a
            target="_blank"
            v-for="contact in contacts"
            :key="contact.url"
            :href="contact.url"
          >
            <component
              :is="contact.icon"
              class="size-6 text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-all duration-300 ease-in-out"
              as-child
            />
          </a>
        </div>
      </div>
      <div
        class="mt-10 md:mt-16 xl:mt-20 grid gap-4 xl:gap-6 grid-cols-1 md:grid-cols-3 justify-items-center w-full"
      >
        <div
          v-for="item in excellences"
          :key="item.title"
          class="flex flex-row w-full lg:w-fit items-center gap-4 rounded-lg"
        >
          <span
            class="p-4 rounded-lg bg-white shadow dark:bg-gray-950 dark:border dark:border-gray-800 dark:shadow-none"
          >
            <component :is="item.icon" class="size-4" />
          </span>
          <p class="font-medium text-gray-950 dark:text-white">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
