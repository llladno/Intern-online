<script setup lang="ts">
import type { InputPropsI } from '@/types/componentsProps/commonProps'

defineProps<InputPropsI>()
const model = defineModel('modelValue')
</script>

<template>
  <div class="input">
    <label class="input__label p-13-500"><slot></slot></label>
    <input
      class="input__text"
      :style="{
        backgroundColor: background,
        paddingLeft: padding + 'px',
        width: fullWidth ? '100%' : width + 'px'
      }"
      :type="type ? type : 'text'"
      v-bind="{ ...props }"
      :placeholder="placeholder"
      v-model="model"
      v-if="!big"
    />
    <textarea
      :placeholder="placeholder"
      class="input__textarea"
      :style="fullWidth ? 'width: 100%' : ''"
      v-else
      rows="4"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.input__text {
  border: $default-border;
  border-radius: 8px;
  padding: 6px 14px;
  height: 40px;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  transition: 0.2s;
  background: $default-light-grey;
  padding-left: 14px;

  &::placeholder {
    color: $additional-color;
    opacity: 0.7;
  }
  &:focus-visible {
    border: 2px solid $primary-color;
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
  padding: 6px 13px;
  outline: none;
  font-size: 13px;
  font-weight: 500;
  // width: 388px;
  line-height: 17px;
  transition: 0.2s;

  &:focus-visible {
    border: 2px solid $primary-color;
  }
}
</style>
