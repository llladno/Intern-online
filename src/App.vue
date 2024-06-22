<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import HeaderBar from '@/components/layout/HeaderBar.vue'
import { ref, watch } from 'vue'
import SideBar from '@/components/layout/SideBar.vue'

const route = useRoute()
const isLogin = ref(false)

watch(
  () => route.params,
  () => {
    if (route.name == 'login' || route.name == 'develop') isLogin.value = true
    else isLogin.value = false
  }
)
</script>

<template>
  <HeaderBar v-if="!isLogin" />
  <div class="main-router">
    <SideBar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/base/variables';

.main-router{
  display: flex;
  gap: 15px;
  background: variables.$background-color;
  height: 100%;
  min-height: 100vh;
  padding: 40px;
}
</style>
