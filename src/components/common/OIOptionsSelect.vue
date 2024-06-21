<script setup lang="ts">
defineProps({
  defaultSelect: String,
  options: Array
})
</script>

<template>
  <select class="options-select">
    <option disabled selected>{{ defaultSelect }}</option>
    <option class="options-select__option" v-for="(slot, index) in options" :key="index">
      {{ slot }}
    </option>
  </select>
</template>

<style scoped></style>
