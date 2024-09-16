<template>
  <div class="custom-select" @click="handleDropdownToggle" ref="selectContainer">
    <label v-if="isLabel" :for="String(id)" class="custom-select__label p-13-500">
      {{ label }}
    </label>
    <button
      ref="selectButton"
      :id="String(id)"
      :class="['select-button', { selected: selectedOption }]"
      class="custom-select__button p-13-400"
    >
      {{ selectedOption || placeholder }}
    </button>
    <transition-group name="fade" appear>
      <span v-if="showScrollArrows" class="scroll-arrow up">вверх</span>
      <ul
        ref="dropdownList"
        v-if="dropdownOpen"
        :class="['custom-select__dropdown', { 'open-upwards': openUpwards }]"
      >
        <li
          v-for="(option, i) in options"
          :key="i"
          @click="selectOption(option)"
          class="custom-select__option p-13-400"
        >
          {{ option.label }}
        </li>
      </ul>
      <span v-if="showScrollArrows" class="scroll-arrow down">вниз</span>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs, onMounted, onBeforeUnmount } from 'vue'
import type { SelectPropsI, SelectPropsOptionI } from '@/types/componentsProps/commonProps'

const props = defineProps<SelectPropsI>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const dropdownOpen = ref<boolean>(false)
const { modelValue } = toRefs(props)
const selectedOption = ref(modelValue.value)
const openUpwards = ref<boolean>(false)
const showScrollArrows = ref<boolean>(false)
const selectButton = ref<HTMLButtonElement | null>(null)
const selectContainer = ref<HTMLElement | null>(null)
const dropdownList = ref<HTMLElement | null>(null)

const handleDropdownToggle = () => {
  if (!dropdownOpen.value) {
    calculateDropdownDirection()
  }
  dropdownOpen.value = !dropdownOpen.value
}

const calculateDropdownDirection = () => {
  if (selectButton.value) {
    const rect = selectButton.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    openUpwards.value = rect.bottom + 250 > viewportHeight
  }
}

const selectOption = (option: SelectPropsOptionI) => {
  selectedOption.value = option.label
  dropdownOpen.value = false
  emit('update:modelValue', option.value)
  if (selectButton.value) {
    selectButton.value.focus()
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

watch(modelValue, (newValue) => {
  const option = props.options.find((option) => option.value === newValue)
  selectedOption.value = option ? option.label : null
})
watch(dropdownOpen, () => {
  if (dropdownOpen.value && dropdownList.value) {
    showScrollArrows.value = dropdownList.value.scrollHeight > dropdownList.value.clientHeight
  }
})
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  display: inline-block;

  &__button {
    width: 100%;
    background-color: $default-light-grey;
    border: $default-border;
    padding: 12px 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: $default-transition;
    margin-top: 10px;
    text-align: left;
    opacity: 0.6;

    &.selected {
      opacity: 1;
    }
  }

  &__dropdown {
    width: 100%;
    position: absolute;
    top: 108%;
    left: 0;
    background-color: $default-white;
    border: $default-border;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    list-style: none;
    margin: 0;
    padding: 10px;
    max-height: 250px;
    overflow-y: auto;

    &.open-upwards {
      top: auto;
      bottom: 63%;
    }
  }
  &__option {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 6px;

    &::placeholder {
      opacity: 0.6;
    }

    &:hover,
    &:focus {
      background-color: $default-light-violet;
    }
  }

  .scroll-arrow {
    text-align: center;
    font-size: 12px;
    color: #888;
    cursor: pointer;
  }

  .scroll-arrow.up {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .scroll-arrow.down {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.fade {
  &-enter-active,
  .fade-leave-active {
    transition: $default-transition;
  }

  &-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
