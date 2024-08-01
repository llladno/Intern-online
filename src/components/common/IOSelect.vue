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
import { ref, watch } from 'vue'

defineProps<SelectPropsI>()
const test = ref()

watch(test, () => console.log(test.value))
</script>

<template>
  <Select v-model="test" class="select">
    <SelectTrigger class="focus:ring-offset-0">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ label }}</SelectLabel>
        <SelectItem
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
          class="select__option"
          >{{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
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
