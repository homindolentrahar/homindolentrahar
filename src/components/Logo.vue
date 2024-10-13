<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
  }>(),
  {
    width: 32,
    height: 48,
  }
);

defineExpose(props);
</script>

<script lang="ts">
export default {
  inheritAttrs: true,
};
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 48 64"
    fill="none"
    class="stroke-[2.5px] stroke-neutral-950 dark:stroke-white"
  >
    <path
      d="M16 61.4L19 32M22 8L19 32M19 32L46 29L43 56"
      strokeWidth="5"
      strokeLinejoin="round"
      strokeDasharray="40 4"
    />
  </svg>
</template>
