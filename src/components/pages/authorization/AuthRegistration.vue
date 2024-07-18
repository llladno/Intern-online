<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'
import IOInput from '@/components/common/IOInput.vue'

const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
const selected = ref('')
const userStore = useUserStore()

function registration() {
  console.log(selected.value === 'organisation' && true)
  console.log(
    userStore.signUp({
      email: email.value,
      password: password.value,
      organisation: selected.value === 'organisation' ? true : false
    })
  )
}
</script>

<template>
  <div class="auth__registration">
    <p class="p-14-500">Зарегистрироваться как</p>
    <Select v-model="selected">
      <SelectTrigger>
        <SelectValue placeholder="Выберите вид пользователя" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Выберите вид пользователя</SelectLabel>
          <SelectItem value="default">Обычный</SelectItem>
          <SelectItem value="organisation">Организация</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <IOInput v-model="email" :props="{ placeholder: 'Телефон' }">Почта</IOInput>
    <IOInput v-model="password" :props="{ placeholder: 'Пароль' }">Пароль</IOInput>
    <IOInput v-model="passwordRepeat" :props="{ placeholder: 'Повторите пароль' }"
      >Повтор пароля</IOInput
    >
    <IOButton @click="registration" fullWidth>Зарегистрироваться</IOButton>
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
