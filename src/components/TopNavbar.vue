<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@iconoir/vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import { RouterLink } from "vue-router";

export interface TopNavbarMenu {
  path: string;
  title: string;
}

const isMenuOpen = ref(false);
const toggleCollapse = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menus: Array<TopNavbarMenu> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Leet to Lit",
    path: "/leet-to-lit",
  },
  {
    title: "Grinding",
    path: "/grinding",
  },
];
</script>

<template>
  <header
    class="flex relative flex-col gap-4 items-start md: md:flex-row px-12 py-4 border-b md:border-none border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
  >
    <h1 class="text-3xl font-bold text-neutral-950 dark:text-white">h.</h1>
    <nav
      class="flex-col md:flex-row w-full h-fit md:h-full md:w-fit items-center mr-auto gap-2 md:gap-6"
      :class="[isMenuOpen ? 'inline-flex' : 'hidden md:flex']"
    >
      <RouterLink
        :to="menu.path"
        v-for="menu in menus"
        :key="menu.path"
        :href="menu.path"
        class="w-full md:w-fit font-medium transition-all duration-300 ease-in-out"
        :class="[
          menu.path === $route.path
            ? 'text-neutral-950 dark:text-white'
            : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 hover:dark:text-white',
        ]"
      >
        {{ menu.title }}
      </RouterLink>
    </nav>
    <div
      class="h-full flex flex-row gap-2"
      :class="[isMenuOpen ? 'inline-flex' : 'hidden md:flex']"
    >
      <ThemeSwitcher />
    </div>
    <span
      @click="toggleCollapse"
      class="absolute inline-block md:hidden top-4 right-4 p-2 border border-neutral-200 dark:border-neutral-800 rounded-sm cursor-pointer bg-white dark:bg-neutral-950 hover:bg-neutral-100 transition-all duration-300 ease-in-out"
    >
      <Menu class="size-4 text-neutral-500 dark:text-neutral-400" />
    </span>
  </header>
</template>
