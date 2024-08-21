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
import { ref, watch, toRefs } from 'vue'

const props = withDefaults(defineProps<SelectPropsI>(), {
  isLabel: true
})

const emit = defineEmits(['update:modelValue', 'click'])

const { modelValue } = toRefs(props)
const internalValue = ref(modelValue.value)

watch(modelValue, (newValue) => {
  internalValue.value = newValue
})

const handleChange = (value: string | number): void => {
  internalValue.value = value
  emit('update:modelValue', value)
}

const handleClick = (event: MouseEvent, value: string) => {
  internalValue.value = value
  emit('click', event) // Эмитируем событие click
}

// const test = ref()

// watch(test, () => console.log(test.value))
</script>

<template>
  <Select class="select overflow-auto">
    <label :for="String(id)" class="p-13-500" v-if="isLabel">
      <slot></slot>
    </label>
    <SelectTrigger class="focus:ring-offset-0" @click="handleClick">
      <SelectValue :placeholder="placeholder" :value="internalValue" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ label }}</SelectLabel>
        <SelectItem
          v-for="option in options"
          :value="String(option.value)"
          :key="option.id"
          @change="handleChange(String(option.value))"
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
    display: flex;
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
