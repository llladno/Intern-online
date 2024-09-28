<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderBar from '@/components/pages/HeaderBar.vue'
import { useUserStore } from '@/stores/account/UserStore'

const route = useRoute()
const isLogin = ref(false)
const userStore = useUserStore()

const disabledHeader = ['/login', '/develop', '/ui-kit', '/registration']

userStore.session()

watch(
  () => route.params,
  () => {
    if (disabledHeader.includes(route.path as string)) isLogin.value = true
    else isLogin.value = false
  }
)
</script>

<template>
  <header-bar v-if="!isLogin" />
  <div :class="!isLogin && 'main-router'">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.main-router {
  display: flex;
  gap: 15px;
  background: $background-color;
  height: 100%;
  min-height: 100vh;
  padding: 40px;
}
</style>
