<script setup lang="ts">
import { ref } from 'vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import AuthLogin from '@/components/pages/authorization/AuthLogin.vue'
import AuthRegistration from '@/components/pages/authorization/AuthRegistration.vue'

const selected = ref('login')
</script>

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
      <auth-registration v-else-if="selected == 'registration'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth {
  margin-top: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
