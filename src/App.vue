<script setup lang="ts">
import { onBeforeMount, onUpdated, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderBar from '@/components/pages/HeaderBar.vue'
import { useUserStore } from '@/stores/UserStore'
import { useOrganisationStore } from '@/stores/OrganistaionStore'
import NoticeComponent from '@/components/common/NoticeComponent.vue'

const route = useRoute()
const isLogin = ref<boolean>(false)
const userStore = useUserStore()
const organisationStore = useOrganisationStore()

const disabledHeader = ['/login', '/develop', '/ui-kit', '/registration']

onBeforeMount(async (): Promise<void> => {
  await userStore.session()
  if (!organisationStore.organisationProfile) await organisationStore.getOrganisationProfile()
})

onUpdated(async (): Promise<void> => {
  await organisationStore.getOrganisationProfile()
})

watch(
  () => route.params,
  () => {
    isLogin.value = disabledHeader.includes(route.path as string)
  }
)
</script>

<template>
  <header-bar v-if="!isLogin" />
  <div :class="!isLogin && 'main-router'">
    <router-view />
  </div>
  <notice-component />
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
