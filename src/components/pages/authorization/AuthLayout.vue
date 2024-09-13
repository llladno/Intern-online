<template>
  <div class="auth">
    <div>
      <router-link to="/">
        <div class="auth__back">
          <span>⭠</span>
          <p>Назад</p>
        </div>
      </router-link>
      <i-o-simple-select
        style="margin-top: 27px"
        class="auth__simpleselect"
        @selected-value="(slot) => (selected = slot)"
      >
        <template #login> Вход </template>
        <template #registration> Регистрация </template>
      </i-o-simple-select>
      <auth-login v-if="selected == 'login'" />
      <!--      <auth-registration v-else-if="selected == 'registration'" />-->
      <auth-login v-else-if="selected == 'registration'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import AuthLogin from '@/components/pages/authorization/AuthLogin.vue'
import AuthRegistration from '@/components/pages/authorization/AuthRegistration.vue'
import { useRouter } from 'vue-router'

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
