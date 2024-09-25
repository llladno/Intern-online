<template>
  <div class="custom-select" ref="selectCustom">
    <label v-if="isLabel" :for="String(id)" class="custom-select__label p-13-500">
      {{ label }}
    </label>
    <button
      ref="selectButton"
      :id="String(id)"
      :class="['custom-select__button', { 'custom-select__button--selected': selectedOption }]"
      class="p-13-400"
      @click="handleDropdownToggle"
    >
      {{ selectedOption || placeholder }}
      <IconArrowDown :class="{ 'arrow-down--rotate': dropdownOpen }" />
    </button>
    <transition-group name="fade" appear>
      <div
        :class="[
          'custom-select__dropdown-container',
          { 'custom-select__dropdown-container--open-upwards': openUpwards }
        ]"
        v-if="dropdownOpen"
      >
        <div
          v-if="canScrollUp"
          :class="[
            'custom-select__arrow',
            'custom-select__arrow--up',
            { 'custom-select__arrow--show': canScrollUp }
          ]"
          @mouseenter.stop="startScrollingUp"
          @mouseleave.stop="stopScrolling"
        >
          <IconArrowDown direction="up" />
        </div>
        <ul
          ref="dropdownList"
          v-if="dropdownOpen"
          class="custom-select__dropdown"
          @scroll="updateScrollArrows"
        >
          <li
            v-for="(option, i) in options"
            :key="i"
            @click.stop="selectOption(option)"
            class="custom-select__option p-13-400"
          >
            {{ option.label }}
          </li>
        </ul>
        <div
          v-if="canScrollDown"
          :class="[
            'custom-select__arrow',
            'custom-select__arrow--down',
            { 'custom-select__arrow--show': canScrollDown }
          ]"
          @mouseenter.stop="startScrollingDown"
          @mouseleave.stop="stopScrolling"
        >
          <IconArrowDown />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { SelectPropsI, SelectPropsOptionI } from '@/types/componentsProps/commonProps'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

const props = defineProps<SelectPropsI>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const dropdownOpen = ref<boolean>(false)
const { modelValue } = toRefs(props)
const selectedOption = ref(modelValue.value)
const openUpwards = ref<boolean>(false)
const selectButton = ref<HTMLButtonElement | null>(null)
const selectCustom = ref<HTMLElement | null>(null)
const dropdownList = ref<HTMLElement | null>(null)
const scrollInterval = ref<number | null>(null)
const canScrollUp = ref<boolean>(false)
const canScrollDown = ref<boolean>(false)

const updateScrollArrows = (): void => {
  if (dropdownList.value) {
    canScrollUp.value = dropdownList.value.scrollTop > 0
    canScrollDown.value =
      dropdownList.value.scrollTop + dropdownList.value.clientHeight <
      dropdownList.value.scrollHeight - 1
  }
}

const handleDropdownToggle = () => {
  if (!dropdownOpen.value) {
    calculateDropdownDirection()
  }
  dropdownOpen.value = !dropdownOpen.value
  if (dropdownOpen.value) {
    nextTick(() => {
      updateScrollArrows()
    })
  }
}

const calculateDropdownDirection = () => {
  if (selectButton.value) {
    const rect = selectButton.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const dropdownHeight = dropdownList.value ? dropdownList.value.scrollHeight : 250

    const spaceBelow = viewportHeight - rect.bottom
    const spaceAbove = rect.top
    openUpwards.value = spaceBelow < dropdownHeight && spaceAbove > spaceBelow
  }
}

const selectOption = (option: SelectPropsOptionI) => {
  if (option) {
    selectedOption.value = option.label
    dropdownOpen.value = false
    canScrollDown.value = false
    canScrollUp.value = false
    emit('update:modelValue', option.value)
    if (selectButton.value) {
      selectButton.value.focus()
    }
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectCustom.value && !selectCustom.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

const startScrollingUp = () => {
  stopScrolling()
  scrollInterval.value = window.setInterval(() => {
    if (dropdownList.value) {
      dropdownList.value.scrollBy({
        top: -5,
        behavior: 'auto'
      })
    }
  }, 10)
}

const startScrollingDown = () => {
  stopScrolling()
  scrollInterval.value = window.setInterval(() => {
    if (dropdownList.value) {
      dropdownList.value.scrollBy({
        top: 5,
        behavior: 'auto'
      })
    }
  }, 10)
}

const stopScrolling = () => {
  if (scrollInterval.value !== null) {
    clearInterval(scrollInterval.value)
    scrollInterval.value = null
  }
}

watch(modelValue, (newValue) => {
  const option = props.options.find((option) => option.value === newValue)
  selectedOption.value = option ? option.label : null
})
watch(dropdownOpen, (newValue) => {
  if (newValue) {
    nextTick(() => {
      updateScrollArrows()
    })
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
  display: inline-block;
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    &--selected {
      opacity: 1;
    }
  }
  .arrow-down--rotate {
    transform: rotateX(180deg);
    transition: $default-transition;
  }
  &__dropdown-container {
    position: absolute;
    width: 100%;
    top: 80px;
    left: 0;
    z-index: 2;
    background-color: $default-white;
    border: $default-border;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &--open-upwards {
      top: auto;
      bottom: 63%;
    }
  }
  &__dropdown {
    width: 100%;
    top: 108%;
    list-style: none;
    margin: 0;
    padding: 20px 10px;
    max-height: 250px;
    overflow-y: hidden;
  }
  &__arrow {
    display: none;
    width: 98%;
    text-align: center;
    cursor: pointer;
    pointer-events: none;

    .arrow-down {
      height: 11px;
      width: 15px;
    }
  }
  &__arrow--up {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  &__arrow--down {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &__arrow--show {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    height: 25px;
    background-color: $default-white;
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
