<script setup lang="ts">
import InputPropsI from '@/types/componentsProps/commonProps'

defineProps<InputPropsI>()
</script>

<template>
  <div class="input">
    <label class="input__label"><slot></slot></label>
    <input
      class="input__text"
      :type="type ? type : 'text'"
      v-bind="{ ...props }"
      :placeholder="placeholder"
      v-if="!big"
    />
    <textarea class="input__textarea" v-else rows="4" />
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input__text {
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

.input__textarea {
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
