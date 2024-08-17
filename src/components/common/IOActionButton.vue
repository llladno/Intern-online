<script setup lang="ts"></script>

<template>
  <button class="button-active">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-active {
  font-weight: 500;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 7px;
  border: $default-border;
}
</style>
