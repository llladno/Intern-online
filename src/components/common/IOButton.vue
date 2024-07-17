<script setup lang="ts">
defineProps({
  fullWidth: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :class="{ 'w-full': fullWidth, button: true, 'button--outlined': outlined }">
    <slot></slot>
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

  &--outlined {
    background: none;
    border: 1px solid $primary-color;
    color: $primary-color;
  }
}
</style>
