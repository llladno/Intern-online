<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import OIInput from '@/components/common/OIInput.vue'
import OIOptionsSelect from '@/components/common/OIOptionsSelect.vue'
</script>

<template>
  <div class="auth__registration">
    <p>Зарегистрироваться как</p>
    <OIOptionsSelect
      :options="['Обычный', 'Организация']"
      defaultSelect="Выберите вид пользователя"
    ></OIOptionsSelect>
    <OIInput :props="{ placeholder: 'Телефон' }">Телефон</OIInput>
    <OIInput :props="{ placeholder: 'Пароль' }">Пароль</OIInput>
    <OIInput :props="{ placeholder: 'Повторите пароль' }">Повтор пароля</OIInput>
    <IOButton fullWidth>Зарегистрироваться</IOButton>
  </div>
</template>

<style scoped>
.auth__registration {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;

  button {
    margin-top: 25px;
  }
}
</style>
