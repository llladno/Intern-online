<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'
import type { SelectPropsI } from '@/types/componentsProps/commonProps'
import { ref } from 'vue'

const props = defineProps<SelectPropsI>()

const selectedValue = ref(props.modelValue)

console.log(selectedValue.value)

const emit = defineEmits(['update:modelValue'])

const updateValue: () => void = () => {
  emit('update:modelValue', selectedValue.value)
}

// watch(() => props.modelValue, (newValue) => {
//     selectedValue.value = newValue;
//   });
// const test = ref()

// watch(test, () => console.log(test.value))
</script>

<template>
  <Select class="select overflow-auto">
    <label :for="String(id)" class="p-13-500">
      <slot></slot>
    </label>
    <SelectTrigger class="focus:ring-offset-0">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ label }}</SelectLabel>
        <SelectItem
          v-for="option in options"
          :value="String(option.value)"
          :key="option.id"
          v-model="selectedValue"
          @change="updateValue"
          class="select__option"
          >{{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style lang="scss" scoped>
button[role='combobox'] {
  background-color: $default-light-grey;
  border: $default-border;

  span {
    color: $additional-color;
    font-size: 13px;
  }
}
.select {
  overflow: auto;

  &__option {
    cursor: pointer;
    transition: $default-transition;

    &::placeholder {
      opacity: 0.6;
    }

    &:hover,
    &:focus {
      background-color: $default-light-violet;
    }
  }
}
</style>
