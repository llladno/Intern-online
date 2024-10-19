<script setup lang="ts">
defineProps({
  defaultSelect: String,
  options: Array
})

const model = defineModel()
</script>

<template>
  <select v-model="model" class="options-select">
    <option disabled selected>
      {{ defaultSelect }}
    </option>
    <option v-for="(slot, index) in options" :key="index" class="options-select__option">
      {{ slot }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.options-select {
  padding: 6px 14px;
  border: $default-border;
  background-color: $default-light-grey;
  border-radius: 6px;
  font-size: 13px;
  height: 40px;

  &__option {
    padding: 20px;
  }
}
</style>
