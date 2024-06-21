<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <div class="default-input">
    <label><slot></slot></label>
    <input type="text" :props="{...props}" :placeholder="props?.placeholder">
  </div>
</template>

<style scoped>
.default-input{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>