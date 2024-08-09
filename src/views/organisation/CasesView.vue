<script setup lang="ts">
import CasesHeader from '@/components/pages/cases/CasesHeader.vue'
import CaseCard from '@/components/pages/cases/CaseCard.vue'
import { ref } from 'vue'
import { casesInfo } from '@/stores/mock'

const selected = ref('active')
function selectedEmit(slot: string) {
  selected.value = slot
}
</script>

<template>
  <div class="organisation">
    <div class="organisation__cases main-container">
      <CasesHeader @selectedEmit="selectedEmit" />
    </div>
    <div v-if="selected == 'active'" class="organisation__cases-content">
      <CaseCard
        v-for="caseInfo in casesInfo"
        :key="caseInfo.id"
        :caseInfo="caseInfo"
        @click.stop="
          (e) =>
            e.target.closest('.dropdown-button') ??
            $router.push(`/organisation/cases/${caseInfo.id}`)
        "
        class="main-container"
      />
    </div>
    <div v-else-if="selected == 'draft'" class="main-container">
      <h2>Черновиков пока нет :(</h2>
    </div>
    <div v-else-if="selected == 'archive'" class="main-container">
      <h2>Архив пуст</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.organisation {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__cases {
    width: 100%;
  }
}

.organisation__cases-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
