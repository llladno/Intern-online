<template>
  <div class="registration-body">
    <img class="registration-body__img" :src="Stage1" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Выберите вашу роль</h2>
      <div
        :class="[
          'registration-body__select-button',
          selected === 'trainee' && 'registration-body__select-button--active'
        ]"
        @click="selected = 'trainee'"
      >
        <!--          <img src="src/assets/media/img/registration/Ellipse%201.png"/>-->
        <span>Стажер</span>
      </div>
      <div
        :class="[
          'registration-body__select-button',
          selected === 'manager' && 'registration-body__select-button--active'
        ]"
        @click="selected = 'manager'"
      >
        <!--          <img src="src/assets/media/img/registration/Ellipse%201.png"/>-->
        <span>Менеджер или Владелиц бизнеса</span>
      </div>
      <button-component
        @click="$emit('nextStage', { from: 'stage1', data: selected })"
        class="registration-body__button"
      >
        Готово
      </button-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/shadcn/ui/button/ButtonComponent.vue'
import { ref } from 'vue'
import Stage1 from '@/assets/media/img/registration/Stage1.png'

defineProps<{ stage: number; nextStage: () => void }>()
defineEmits(['nextStage'])

const selected = ref('')
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
