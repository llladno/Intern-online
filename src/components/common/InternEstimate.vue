<template>
  <div class="case-estimate">
    <div
      :class="['case-estimate__value', estimate === selected && 'case-estimate__value--selected']"
      v-for="estimate in estimateCounts"
      :key="estimate"
      @click="selected = estimate"
    >
      {{ estimate }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type { EstimateI } from '@/types/commonProps'
import { ref } from 'vue'

const selected = ref(0)

defineProps<EstimateI>()
</script>
<style scoped lang="scss">
.case-estimate {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #e4e4e7;
  overflow: hidden;

  &__value {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease;
    border-right: 1px solid #e4e4e7;

    &:hover {
      background: $default-light-grey;
    }

    &--selected {
      background: $primary-color !important;
      color: $default-white;
    }

    &:last-child {
      border-right: none;
    }
  }
}
</style>
