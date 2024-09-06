<template>
  <div class="registration-body">
    <img />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Как вас зовут?</h2>
      <i-o-input>Имя *</i-o-input>
      <i-o-input>Фамилия *</i-o-input>
      <i-o-input>Отчество</i-o-input>
      <i-o-button class="registration-body__button" @click="$emit('nextStage')">Готово</i-o-button>
    </div>
  </div>
</template>

<script setup lang="ts">

import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'

defineEmits(['nextStage'])
</script>

<style scoped lang="scss">
@import "@/assets/components/layout/registrationStages";

</style>