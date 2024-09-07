<template>
  <div class="registration-body">
    <img :src="Stage2" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Как вас зовут?</h2>
      <i-o-input v-model="data.name">Имя *</i-o-input>
      <i-o-input v-model="data.surname">Фамилия *</i-o-input>
      <i-o-input v-model="data.patronymic">Отчество</i-o-input>
      <i-o-button
        class="registration-body__button"
        @click="$emit('nextStage', { from: 'stage2', data })"
        >Готово</i-o-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'
import Stage2 from '@/assets/media/img/registration/Stage2-3.png'
import { reactive } from 'vue'

const data = reactive({
  name: '',
  surname: '',
  patronymic: ''
})

defineEmits(['nextStage'])
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
