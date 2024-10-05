<template>
  <div class="auth__login">
    <i-o-input
      v-model="v.loginData.email.$model"
      :error="v.loginData.email.$errors"
      :props="{ placeholder: 'Логин' }"
      type="email"
    >
      Логин
    </i-o-input>
    <i-o-input
      v-model="v.loginData.password.$model"
      :error="v.loginData.password.$errors"
      type="password"
    >
      Пароль
    </i-o-input>
    <div class="auth__login__remember">
      <div><input type="checkbox" /> <label>Сохранить вход</label></div>
      <router-link to="/recovery"> Забыли пароль? </router-link>
    </div>
    <i-o-button full-width @click="signIn" :loading="isLoading"> Войти </i-o-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import { useUserStore } from '@/stores/UserStore'
import { defaultErrorMessage, emailCheckMessage } from '@/helpers/vuelidateHelper'
import { useVuelidate } from '@vuelidate/core'
import type { LoginI } from '@/types/userI'
import { email, required } from '@vuelidate/validators'

const userStore = useUserStore()
const isLoading = ref<boolean>(false)

const loginData = ref<LoginI>({
  email: '',
  password: ''
})

const rules = computed(() => ({
  loginData: {
    email: emailCheckMessage,
    password: defaultErrorMessage
  }
}))

const v = useVuelidate(rules, { loginData })

const signIn = async (): Promise<void> => {
  isLoading.value = true
  await userStore.signIn({
    email: loginData.value.email,
    password: loginData.value.password
  })
  isLoading.value = false
}
</script>

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
