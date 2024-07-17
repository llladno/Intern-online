<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOOptionsSelect from '@/components/common/IOOptionsSelect.vue'
</script>

<template>
  <div class="auth__registration">
    <p>Зарегистрироваться как</p>
    <IOOptionsSelect
      :options="['Обычный', 'Организация']"
      defaultSelect="Выберите вид пользователя"
    ></IOOptionsSelect>
    <IOInput :props="{ placeholder: 'Телефон' }">Телефон</IOInput>
    <IOInput :props="{ placeholder: 'Пароль' }">Пароль</IOInput>
    <IOInput :props="{ placeholder: 'Повторите пароль' }">Повтор пароля</IOInput>
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
