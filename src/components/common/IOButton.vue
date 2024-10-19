<script setup lang="ts">
import type { ButtonPropsI } from '@/types/commonProps'

defineProps<ButtonPropsI>()
</script>

<template>
  <button
    :class="{
      'w-full': fullWidth,
      button: true,
      'button--outlined': outlined,
      'button--disabled': disable,
      'button--thin': thin
    }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/base/variables';
.button {
  background: $primary-color;
  border-radius: 8px;
  border: none;
  color: $default-white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &--outlined {
    background: none;
    border: 1px solid $primary-color;
    color: $primary-color;
  }

  &--disabled {
    background: $default-grey;
    color: $default-black;
  }

  &--thin {
    padding: 7px 14px;
  }
}
</style>
