<script setup lang="ts">
import type { InputPropsI } from '@/types/componentsProps/commonProps'
import type { ErrorI } from '@/types/componentsProps/commonProps'

defineProps<ErrorI & InputPropsI>()

const model = defineModel<string | number | readonly string[] | null | undefined>('modelValue')
</script>

<template>
  <div class="input">
    <label class="input__label p-13-500"><slot></slot></label>
    <input
      :class="['input__text', error?.length && 'input__text--error']"
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
      v-model="model"
      v-else
      rows="4"
    />

    <TransitionGroup name="error">
      <div class="input__error" v-for="element in error" :key="element.$uid">
        <div class="input__error-message p-13-400">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__text {
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

    &--error {
      border: 2px solid $error-color;
    }
  }

  input[type='checkbox'] {
    width: 15px;
    height: 15px;
  }

  &__textarea {
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
  &__error {
    position: absolute;
    bottom: -19px;
    left: 0;
    &-message {
      color: $error-color;
    }
  }
}
.error {
  &-enter-active {
    transition: $default-transition;
  }

  &-leave-active {
    transition: $default-transition;
  }

  &-enter-from {
    transform: translateX(-30px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(100px);
    opacity: 0;
  }
}
</style>
