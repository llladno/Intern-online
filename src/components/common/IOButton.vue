<script setup lang="ts">
import IconPlus from '../icons/IconPlus.vue'
import type { ButtonPropsI } from '@/types/componentsProps/commonProps'

defineProps<ButtonPropsI>()
</script>

<template>
  <button
    :style="{ width: width + 'px' }"
    :class="[
      'button',
      { 'w-full': fullWidth },
      { button: true },
      { 'button--outlined': outlined },
      `button--${background}`
    ]"
  >
    <slot></slot>
    <IconPlus v-if="icon"></IconPlus>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-color;
  border-radius: 8px;
  border: none;
  color: $default-white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  transition: $default-transition;

  &:hover {
    opacity: 0.8;
  }

  &--outlined {
    background: none;
    border: 2px solid $primary-color;
    color: $primary-color;
  }
  &--white {
    flex-direction: row-reverse;
    justify-content: center;
    background-color: $default-white;
    color: $additional-color;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    border: $default-border;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
