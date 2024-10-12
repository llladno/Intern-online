<template>
  <div class="auth">
    <div>
      <router-link v-if="selected !== 'changePassword'" to="/">
        <div class="auth__back">
          <span>⭠</span>
          <p>Назад</p>
        </div>
      </router-link>
      <i-o-simple-select
        style="margin-top: 27px"
        class="auth__simpleselect"
        @selected-value="(slot) => (selected = slot)"
        v-if="selected !== 'changePassword'"
      >
        <template #login> Вход </template>
        <template #registration> Регистрация </template>
      </i-o-simple-select>
      <auth-login v-if="selected == 'login'" @change-password="selected = 'changePassword'" />
      <!--      <auth-registration v-else-if="selected == 'registration'" />-->
      <auth-login v-else-if="selected == 'registration'" />
      <auth-reset-password
        v-else-if="selected == 'changePassword'"
        @set-back="selected = 'login'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import AuthLogin from '@/components/pages/authorization/AuthLogin.vue'
import { useRouter } from 'vue-router'
import AuthResetPassword from '@/components/pages/authorization/AuthResetPassword.vue'

const selected = ref('login')
const router = useRouter()

watch(selected, (value) => {
  if (value === 'registration') {
    const page = document.querySelector('.auth')
    const img = document.querySelector('.auth-img')
    page.style.opacity = '0'
    img.style.opacity = '0'
    setTimeout(() => {
      router.push('/registration')
    }, 600)
  }
})
</script>

<style scoped lang="scss">
.auth {
  opacity: 1;
  margin-top: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.6s ease;
}

.auth__simpleselect {
  margin-bottom: 27px;
}

.auth__back {
  display: flex;
  gap: 5px;

  p {
    color: #28282d;
  }
}
</style>
