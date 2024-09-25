<template>
  <svg
    :class="arrowClass"
    viewBox="0 0 10.0061 5.75308"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g opacity="0.800000">
      <path
        id="Vector"
        d="M0.75 0.75L5 5L9.25 0.75"
        stroke="#28282D"
        stroke-opacity="1.000000"
        stroke-width="1.500000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  direction?: 'up' | 'down'
}

const props = defineProps<Props>()
const arrowClass = computed(() => ({
  'arrow-down': true,
  up: props.direction === 'up'
}))
</script>

<style lang="scss" scoped>
.arrow-down {
  width: 11px;
  height: 6px;
  transition: $default-transition;

  &.up {
    transform: rotateX(180deg);
  }
}
</style>
