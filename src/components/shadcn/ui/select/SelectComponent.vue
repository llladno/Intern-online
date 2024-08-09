<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'radix-vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <div class="select">
    <SelectRoot v-bind="forwarded">
      <slot />
    </SelectRoot>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
}
</style>
