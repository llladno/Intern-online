<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import {
  SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'
import { useUserStore } from '@/stores/account/UserStore'

const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
const selected = ref('')
const userStore = useUserStore()

function registration() {
  userStore.signUp({
    email: email.value,
    password: password.value,
    organisation: selected.value === 'organisation' && true
  })
}
</script>

<template>
  <div class="auth__registration">
    <!--    <p class="p-14-500">Зарегистрироваться как</p>-->
    <!--    <select-component v-model="selected">-->
    <!--      <select-trigger>-->
    <!--        <select-value placeholder="Выберите вид пользователя" />-->
    <!--      </select-trigger>-->
    <!--      <select-content>-->
    <!--        <select-group>-->
    <!--          <select-label>Выберите вид пользователя</select-label>-->
    <!--          <select-item value="default"> Обычный </select-item>-->
    <!--          <select-item value="organisation"> Организация </select-item>-->
    <!--        </select-group>-->
    <!--      </select-content>-->
    <!--    </select-component>-->
    <!--    <i-o-input v-model="email" :props="{ placeholder: 'Телефон' }"> Почта </i-o-input>-->
    <!--    <i-o-input v-model="password" :props="{ placeholder: 'Пароль' }"> Пароль </i-o-input>-->
    <!--    <i-o-input v-model="passwordRepeat" :props="{ placeholder: 'Повторите пароль' }">-->
    <!--      Повтор пароля-->
    <!--    </i-o-input>-->
    <!--    <i-o-button class="auth__registration-button" full-width @click="registration">-->
    <!--      Зарегистрироваться-->
    <!--    </i-o-button>-->
  </div>
</template>

<style scoped lang="scss">
.auth__registration {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 388px;

  &-button {
    margin-top: 25px;
  }
}
</style>
