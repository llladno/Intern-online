<template>
  <div class="checkbox">
    <input
      class="checkbox__rect"
      type="checkbox"
      :value="value"
      :id="id"
      :checked="checked"
      @input="updateChecked($event)"
    />
    <label :for="id" class="p-13-500 checkbox__label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import type { CheckboxPropsI } from '@/types/componentsProps/commonProps'

withDefaults(defineProps<CheckboxPropsI>(), {
  checked: false
})

const emit = defineEmits(['update:checked'])

const updateChecked = (event: Event): void => {
  emit('update:checked', (event.target as HTMLInputElement).checked)
}
</script>

<style lang="scss">
.checkbox {
  position: relative;
  display: flex;
  align-items: center;

  &__rect {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: $default-light-grey;
    border: $default-border;
    border-radius: 3px;
    flex-shrink: 0;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: all 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 1px;
      left: 6px;
      width: 6px;
      height: 11px;
      border-style: solid;
      border-color: $default-white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }

    &:checked {
      background: $primary-color;
      width: 20px;
      height: 20px;
      border: 2px solid $primary-color;

      &::before {
        opacity: 1;
      }
    }
  }

  &__label {
    cursor: pointer;
    margin-left: 10px;
    width: 100%;
  }
}
</style>
