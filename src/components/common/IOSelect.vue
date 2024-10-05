<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'
import type { SelectPropsI } from '@/types/commonProps'

defineProps<SelectPropsI>()
const emit = defineEmits(['update:modelValue'])

const test = ref()

watch(
  () => test.value,
  (newVal, oldVal) => {
    emit('update:modelValue', newVal)
  }
)
</script>

<template>
  <select-component v-model="test" class="select">
    <select-trigger class="focus:ring-offset-0">
      <select-value :placeholder="placeholder" />
    </select-trigger>
    <select-content>
      <select-group>
        <select-label>{{ label }}</select-label>
        <select-item
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="select__option"
        >
          {{ option.label }}
        </select-item>
      </select-group>
    </select-content>
  </select-component>
</template>

<style lang="scss" scoped>
.select {
  &__option {
    cursor: pointer;
    transition: $default-transition;

    &:hover,
    &:focus {
      background-color: $default-light-violet;
    }
  }
}
</style>
