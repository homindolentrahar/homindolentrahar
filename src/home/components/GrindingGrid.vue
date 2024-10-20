<script lang="ts" setup>
import GrindingGridItem from "./GrindingGridItem.vue";
import GrindingListItem from "./GrindingListItem.vue";
</script>

<template>
  <div class="w-full grid grid-flow-col grid-cols-2 gap-4 lg:gap-6">
    <div class="flex flex-col gap-4">
      <GrindingListItem v-for="n in 3" :key="n" />
    </div>
    <GrindingGridItem />
  </div>
</template>
