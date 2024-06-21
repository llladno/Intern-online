<script setup lang="ts">

import OIButton from '@/components/common/OIButton.vue'
import OIInput from '@/components/common/OIInput.vue'
</script>

<template>
  <div class="auth__login">
    <OIInput :props="{placeholder: 'Логин'}">Логин</OIInput>
    <OIInput>Пароль</OIInput>
    <div class="auth__login__remember">
      <div>
        <input type="checkbox"> <label>Сохранить вход</label>
      </div>
      <RouterLink to="/recovery">Забыли пароль?</RouterLink>
    </div>
    <OIButton fullWidth>Войти</OIButton>
  </div>
</template>

<style scoped lang="scss">
.auth__login{
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;

  .auth__login__remember{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button{
    margin-top: 25px;
  }
}
</style>