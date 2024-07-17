<script setup lang="ts">
defineProps({
  defaultSelect: String,
  options: Array
})

const model = defineModel()
</script>

<template>
  <select class="options-select" v-model="model">
    <option disabled selected>{{ defaultSelect }}</option>
    <option class="options-select__option" v-for="(slot, index) in options" :key="index">
      {{ slot }}
    </option>
  </select>
</template>

<style scoped></style>
