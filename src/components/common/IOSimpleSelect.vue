<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const slots = defineSlots()
const selected = ref({ width: 0, left: 4, id: 0 })
let slide = ref(null)
let firsh = ref()

const emit = defineEmits(['selectedValue'])

onMounted(() => {
  nextTick(() => {
    ;(document.querySelector('.simple__selected') as HTMLSpanElement)?.click() //TODO посмотреть как писать simple-selected или simple__selected
  })
  setTimeout(() => {}, 1000)
})

function handleSelect(event: Event, id: number, slot: string) {
  if (slide.value) {
    const element = slide.value as HTMLDivElement
    const target = event.target as HTMLSpanElement
    element.style.width = target.offsetWidth + 32 + 'px'
    element.style.left = target.offsetLeft - 16 + 20 + 'px'
  }

  selected.value.id = id
  emit('selectedValue', slot)
}
</script>

<template>
  <div class="switch">
    <div class="switch__slide-container" ref="slide"></div>
    <div class="switch__slider-values">
      <span
        class="p-13-500"
        v-for="(slot, index) in Object.keys(slots)"
        :class="[selected.id == index ? 'simple__selected' : 'default']"
        @click="(event) => handleSelect(event, index, slot)"
        :key="index"
        :ref="index == 0 ? firsh : null"
      >
        <slot :name="slot"></slot>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch__slider-values,
.switch {
  position: relative;
  display: flex;
  gap: 35px;
  width: fit-content;
}

.switch {
  height: 40px;
  border: $default-border;
  // padding: 5px 0;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;

  &__slide-container {
    position: absolute;
    left: 0;
    height: 32px;
    background-color: $primary-color;
    transition: 0.3s;
    border-radius: 7px;
  }

  &__slider-values {
    width: 100%;
    margin: 0 20px;

    span {
      position: relative;
      width: fit-content;
      left: auto;
      transition: 0.3s;
      cursor: pointer;

      &.simple__selected {
        color: white;
      }

      &.default {
        color: $additional-color;
        opacity: 0.7;
      }
    }
  }
}
</style>
