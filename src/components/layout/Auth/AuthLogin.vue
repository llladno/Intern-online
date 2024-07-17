<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
</script>

<template>
  <div class="auth__login">
    <IOInput :props="{ placeholder: 'Логин' }">Логин</IOInput>
    <IOInput>Пароль</IOInput>
    <div class="auth__login__remember">
      <div><input type="checkbox" /> <label>Сохранить вход</label></div>
      <RouterLink to="/recovery">Забыли пароль?</RouterLink>
    </div>
    <IOButton fullWidth>Войти</IOButton>
  </div>
</template>

<style scoped lang="scss">
.auth__login {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;

  .auth__login__remember {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-top: 25px;
  }
}
</style>
