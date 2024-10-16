<template>
  <a @click="router.back()" class="back-link"
    ><IconArrowLeft /> <span class="back-link__text">Назад</span></a
  >
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

const router = useRouter()
</script>

<style scoped lang="scss">
.back-link {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &__text {
    font-size: 13px;
    font-weight: 500;
    color: $additional-color;
    opacity: 0.9;
  }
}
</style>
