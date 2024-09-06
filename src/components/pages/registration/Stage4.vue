<template>
<div class="registration-body">
  <div class="registration-body__form">
    <h2 class="registration-body__header">Введите почту</h2>
    <span>Пароль будет отправлен на указанную вами почту</span>
    <i-o-input>Почта</i-o-input>
    <i-o-button class="registration-body__button">Готово</i-o-button>
  </div>
</div>
</template>

<script setup lang="ts">

import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'
</script>

<style scoped lang="scss">
@import "@/assets/components/layout/registrationStages";

</style>