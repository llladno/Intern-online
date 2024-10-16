<template>
  <div class="registration-body">
    <img :src="Stage5" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Введите почту</h2>
      <span>Пароль будет отправлен на указанную вами почту</span>
      <i-o-input v-model="mail">Почта</i-o-input>
      <i-o-button
        class="registration-body__button"
        @click="$emit('nextStage', { from: 'stage5', data: mail })"
        >Готово</i-o-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'
import Stage5 from '@/assets/media/img/registration/Stage5.png'
import { ref } from 'vue'

defineEmits(['nextStage'])

const mail = ref('')
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
