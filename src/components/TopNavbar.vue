<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "@iconoir/vue";
import { RouterLink } from "vue-router";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

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
    class="flex fixed z-10 w-full flex-col gap-4 items-start md:items-center md:flex-row px-12 py-4 border-b md:border-none border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
  >
    <RouterLink to="/" class="text-3xl font-bold text-gray-950 dark:text-white"
      >h.</RouterLink
    >
    <nav
      class="flex-col md:flex-row w-full h-fit md:h-full md:w-fit items-center mr-auto gap-2 md:gap-6 md:ml-16"
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
            ? 'text-gray-950 dark:text-white'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-950 hover:dark:text-white',
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
      class="absolute inline-block md:hidden top-4 right-4 p-2 border border-neutral-200 dark:border-neutral-800 rounded-sm cursor-pointer bg-white dark:bg-gray-950 hover:bg-gray-100 hover:dark:bg-gray-900 transition-all duration-300 ease-in-out"
    >
      <Menu class="size-4 text-gray-500 dark:text-gray-400" />
    </span>
  </header>
</template>
