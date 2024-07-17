<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import OIInput from '@/components/common/OIInput.vue'
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
    <p>Зарегистрироваться как</p>
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
    <OIInput v-model="email" :props="{ placeholder: 'Телефон' }">Почта</OIInput>
    <OIInput v-model="password" :props="{ placeholder: 'Пароль' }">Пароль</OIInput>
    <OIInput v-model="passwordRepeat" :props="{ placeholder: 'Повторите пароль' }"
      >Повтор пароля</OIInput
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
