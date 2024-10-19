<script setup lang="ts">
import ProjectsCarousel from "./components/ProjectsCarousel.vue";
import { Carousel } from "@/components/ui/carousel";
import ProjectsCarouselNavigation from "./components/ProjectsCarouselNavigation.vue";
import Autoplay from "embla-carousel-autoplay";

const experiences = [
  {
    title: "Mobile Developer",
    company: "Wesclic Indonesia Neotech",
    companyUrl: "https://wesclic.com/",
    type: "Freelance",
    description:
      "Develop and maintain Finmap mobile app, a financial management app for Indonesian market from scratch",
    startYear: 2023,
    endYear: 2024,
  },
  {
    title: "Mobile Developer",
    company: "Suitmedia Digital Agency",
    companyUrl: "https://suitmedia.com/",
    type: "Freelance",
    description:
      "Develop and maintain mobile applications for various client, such as ITB, Sharp ID, EMC Hospital, and more",
    startYear: 2022,
    endYear: 2024,
  },
  {
    title: "Mobile Developer",
    company: "Deptech Digital Indonesia",
    companyUrl: "https://deptechdigital.com/",
    type: "Fulltime",
    description:
      "Develop and maintain mobile applications, while also creating boilerplate to speed up development process",
    startYear: 2024,
  },
];
</script>

<template>
  <section
    class="flex justify-center items-center w-full py-20 lg:py-32 lg:h-[720px] bg-white dark:bg-gray-950"
  >
    <Carousel
      class="flex flex-col items-start w-10/12 gap-8 md:gap-12 mx-auto"
      :plugins="[
        Autoplay({
          delay: 5000,
        }),
      ]"
    >
      <div class="flex flex-row justify-between w-full">
        <div class="flex flex-col gap-4 w-full sm:w-10/12 md:w-8/12 xl:w-5/12">
          <h1
            class="text-4xl lg:text-4xl font-bold text-gray-950 dark:text-white"
          >
            Projects
          </h1>
          <p
            class="text-sm md:text-[16px] text-gray-500 dark:text-gray-400 text-start self-start"
          >
            Here are some of my projects that I've worked on (so far), ranging
            from mobile apps, web apps, and even some design projects.
          </p>
        </div>
        <ProjectsCarouselNavigation />
      </div>
      <div class="w-full">
        <ProjectsCarousel />
      </div>
    </Carousel>
  </section>
</template>
