<script lang="ts" setup>
import { useCarousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { NavArrowLeft, NavArrowRight } from "@iconoir/vue";

const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel();
</script>

<template>
  <div class="hidden md:inline-flex flex-row gap-2">
    <Button
      variant="outline"
      size="icon"
      @click="() => scrollPrev()"
      :disabled="!canScrollPrev"
    >
      <NavArrowLeft class="size-5" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      @click="() => scrollNext()"
      :disabled="!canScrollNext"
    >
      <NavArrowRight class="size-5" />
    </Button>
  </div>
</template>
