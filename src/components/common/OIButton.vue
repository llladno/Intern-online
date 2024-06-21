<script setup lang="ts">
defineProps({
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :class="[fullWidth ? 'w-full' : '']" style="">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>