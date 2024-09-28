<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import { useUserStore } from '@/stores/account/UserStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const userStore = useUserStore()

function signin() {
  userStore.signIn({
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <div class="auth__login">
    <i-o-input v-model="email" :props="{ placeholder: 'Логин' }"> Логин </i-o-input>
    <i-o-input v-model="password"> Пароль </i-o-input>
    <div class="auth__login__remember">
      <div><input type="checkbox" /> <label>Сохранить вход</label></div>
      <router-link to="/recovery"> Забыли пароль? </router-link>
    </div>
    <i-o-button full-width @click="signin"> Войти </i-o-button>
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
