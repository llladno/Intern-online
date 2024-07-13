<script setup lang="ts">
defineProps({
  color: String
})
</script>

<template>
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.66683 4.54167C9.66683 6.29057 8.24907 7.70833 6.50016 7.70833C4.75126 7.70833 3.3335 6.29057 3.3335 4.54167C3.3335 2.79276 4.75126 1.375 6.50016 1.375C8.24907 1.375 9.66683 2.79276 9.66683 4.54167Z"
      :stroke="color ? color : '#28282D'"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.50016 10.0833C3.43958 10.0833 0.958496 12.5644 0.958496 15.625H12.0418C12.0418 12.5644 9.56074 10.0833 6.50016 10.0833Z"
      :stroke="color ? color : '#28282D'"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
