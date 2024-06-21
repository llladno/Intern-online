<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const slots = defineSlots()
const selected = ref({ width: 0, left: 4, id: 0 })
let slide = ref(null)
let firsh = ref()

const emit = defineEmits(['selectedValue'])


onMounted(()=>{
  nextTick(()=>{
    document.querySelector('.selected').click()
  })
  setTimeout(()=>{

  },1000)
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
    <div class="slide-container" ref="slide"></div>
    <div class="slider-values">
      <span v-for="(slot, index) in Object.keys(slots)" :class="[selected.id == index ? 'selected' : 'default']"
            @click="(event) => handleSelect(event, index, slot)" :key="index" :ref="index == 0 ? firsh : null">
      <slot :name="slot"></slot>
    </span>
    </div>
  </div>
</template>

<style scoped>

</style>