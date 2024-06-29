<script setup lang="ts">
import OISimpleSelect from '@/components/common/OISimpleSelect.vue'
import { ref } from 'vue'
import AuthLogin from '@/components/layout/Auth/AuthLogin.vue'
import AuthRegistration from '@/components/layout/Auth/AuthRegistration.vue'

const selected = ref('login')
</script>

<template>
  <div class="auth">
    <div>
      <RouterLink to="/">
        <div class="auth__back">
          <span>⭠</span>
          <p>Назад</p>
        </div>
      </RouterLink>
      <OISimpleSelect
        @selectedValue="(slot) => (selected = slot)"
        style="margin-top: 27px"
        class="auth__simpleselect"
      >
        <template #login>Вход</template>
        <template #registration>Регистрация</template>
      </OISimpleSelect>
      <AuthLogin v-if="selected == 'login'" />
      <AuthRegistration v-else-if="selected == 'registration'" />
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
