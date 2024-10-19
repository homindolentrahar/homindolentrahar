<script lang="ts" setup>
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProjectsCarouselItem from "./ProjectsCarouselItem.vue";
</script>

<template>
  <CarouselContent>
    <CarouselItem v-for="n in 10" :key="n" class="sm:basis-1/2 lg:basis-1/3">
      <ProjectsCarouselItem />
    </CarouselItem>
  </CarouselContent>
</template>
