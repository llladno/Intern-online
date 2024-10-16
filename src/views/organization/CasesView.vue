<template>
  <div class="organization" v-if="organizationStore.organizationProfile">
    <div class="organization__cases main-container">
      <cases-header @selected-emit="selectedEmit" />
    </div>
    <div v-if="selected == 'active'" class="organization__cases-content">
      <case-card
        v-for="caseInfo in casesInfo"
        :key="caseInfo.id"
        :case-info="caseInfo"
        class="main-container"
        @click.stop="
          (e) =>
            e.target.closest('.dropdown-button') ??
            $router.push(`/organization/case-${caseInfo.id}`)
        "
      />
    </div>
    <div v-else-if="selected == 'draft'" class="main-container">
      <h2>Черновиков пока нет :(</h2>
    </div>
    <div v-else-if="selected == 'archive'" class="main-container">
      <h2>Архив пуст</h2>
    </div>
  </div>
  <div v-else class="organization">
    <h2 class="organization__empty">Войдите в аккаунт, чтобы увидеть свои кейсы</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CaseCard from '@/components/pages/cases/CaseCard.vue'
import CasesHeader from '@/components/pages/cases/CasesHeader.vue'
import { casesInfo } from '@/stores/mock'
import { useOrganizationStore } from '@/stores/OrganistaionStore'

const selected = ref('active')
const selectedEmit = (slot: string) => (selected.value = slot)

const organizationStore = useOrganizationStore()
</script>

<style scoped lang="scss">
.organization {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__cases {
    width: 100%;
  }

  &__empty {
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
    color: #69696c;
  }
}

.organization__cases-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
