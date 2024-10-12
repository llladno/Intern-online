<template>
  <div class="auth-reset-password">
    <span @click="$emit('setBack')">Назад</span>
    <i-o-input placeholder="Укажите вашу почту" v-model="email"> E-mail </i-o-input>
    <i-o-button @click="handleResetPassword">Сбросить пароль</i-o-button>
  </div>
</template>

<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'
import { useNoticeStore } from '@/stores/NotificationStore'

const userStore = useUserStore()
const notification = useNoticeStore()

const email = ref<string>('')

const emit = defineEmits(['setBack'])

const handleResetPassword = (): void => {
  console.log(email.value)
  userStore.changePassword(email.value).then(() => {
    notification.noticeShow('Пароль был отправлен на вашу почту', 'success')

    setTimeout(() => {
      emit('setBack')
    }, 2000)
  })
}
</script>
<style scoped lang="scss">
.auth-reset-password {
}
</style>
