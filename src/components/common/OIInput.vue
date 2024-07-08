<script setup lang="ts">
defineProps({
  props: Object,
  big: Boolean,
  placeholder: String,
  type: String,
})
</script>

<template>
  <div class="default-input">
    <label><slot></slot></label>
    <input :type="type ? type : 'text'" v-bind="{ ...props }" :placeholder="placeholder" v-if="!big"/>
    <textarea v-else rows="4"/>
  </div>
</template>

<style scoped>
.default-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
