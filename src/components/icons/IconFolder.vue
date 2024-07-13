<script setup lang="ts">
defineProps({
  color: String
})
</script>

<template>
  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.375 2.54171V10.4584C1.375 11.3328 2.08388 12.0417 2.95833 12.0417H14.0417C14.9161 12.0417 15.625 11.3328 15.625 10.4584V4.12504C15.625 3.25059 14.9161 2.54171 14.0417 2.54171H9.29167L7.70833 0.958374H2.95833C2.08388 0.958374 1.375 1.66726 1.375 2.54171Z"
      :stroke="color ? color : '#28282D'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped></style>
