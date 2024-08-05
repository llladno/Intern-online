<template>
  <div class="filter" ref="multiselectFilterRef">
    <div
      class="filter__options"
      :placeholder="placeholder"
      @click="toggleDropdown"
      :class="{ active: isDropdownOpen }"
    >
      <template v-if="selectedValues.length > 2">
        <span class="filter__text"> Выбрано {{ selectedValues.length }} </span>
      </template>
      <template v-else>
        <span class="filter__text">
          {{ selectedValues.join(', ') || placeholder }}
        </span>
      </template>
      <IconFilter v-if="!selectedValues.length" />
    </div>
    <transition name="slide-fade">
      <div v-show="isDropdownOpen" class="filter__dropdown">
        <div class="filter__dropdown-menu" v-for="option in options" :key="option.id">
          <IOCheckbox
            :checked="isSelected(option.value)"
            :id="option.id ?? 'default-id'"
            :value="option.value"
            :label="option.label"
            @change="toggleOption(option.value)"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import IOCheckbox from '@/components/common/IOCheckbox.vue'
import type { SelectPropsI } from '@/types/componentsProps/commonProps'

defineProps<SelectPropsI>()

const selectedValues = ref<string[]>([])
const isDropdownOpen = ref<boolean>(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleOption = (value: string): void => {
  if (isSelected(value)) {
    selectedValues.value = selectedValues.value.filter((v) => v !== value)
  } else {
    selectedValues.value.push(value)
  }
}

const isSelected = (value: string): boolean => {
  return selectedValues.value.includes(value)
}

const multiselectFilterRef = ref<HTMLElement | null>(null)
const handleClickOutside = (event: MouseEvent) => {
  if (multiselectFilterRef.value && !multiselectFilterRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss">
.slide-fade {
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-enter-from,
  &-leave-to {
    transform: translateY(-40px);
    opacity: 0;
  }
}
.filter {
  position: relative;
  width: 148px;

  &__options {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: $default-border;
    border-radius: 8px;
    padding: 6px 14px;
    height: 40px;
    outline: none;

    &.active {
      border: 2px solid $primary-color;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 13px;
  }

  &__dropdown {
    position: absolute;
    width: 100%;
    top: 45px;
    left: 0;
    overflow: auto;
    border: $default-border;
    border-radius: 6px;
    z-index: 100;
    height: 150px;
    overflow-y: auto;

    &-menu {
      padding: 10px 16px 10px 16px;
      transition: $default-transition;
      background-color: $default-light-grey;

      &:hover {
        background-color: $default-light-violet;
        cursor: pointer;
      }
    }
  }
}

.filter__dropdown {
  &::-webkit-scrollbar {
    width: 6px;
    background-color: $default-light-grey;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: $hover-color;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
}
</style>
