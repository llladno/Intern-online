<script setup lang="ts">
defineProps({
  props: Object,
  big: Boolean,
  placeholder: String,
  type: String
})
</script>

<template>
  <div class="default-input">
    <label><slot></slot></label>
    <input
      :type="type ? type : 'text'"
      v-bind="{ ...props }"
      :placeholder="placeholder"
      v-if="!big"
    />
    <textarea v-else rows="4" />
  </div>
</template>

<style lang="scss" scoped>
.default-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
input {
  border: $default-border;
  background: $default-light-grey;
  border-radius: 8px;
  padding: 6px 14px;
  height: 40px;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  width: 388px;
  line-height: 17px;
  transition: 0.2s;

  &:focus {
    border: 1px solid $primary-color;
  }
}

input[type='checkbox'] {
  width: 15px;
  height: 15px;
}

textarea {
  border: $default-border;
  background: $default-light-grey;
  border-radius: 8px;
  padding: 6px 14px;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  width: 388px;
  line-height: 17px;
  transition: 0.2s;

  &:focus {
    border: 1px solid $primary-color;
  }
}
</style>
