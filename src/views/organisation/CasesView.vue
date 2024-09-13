<template>
  <div class="organisation">
    <div class="organisation__cases main-container">
      <cases-header @selected-emit="selectedEmit" />
    </div>
    <div v-if="selected == 'active'" class="organisation__cases-content">
      <case-card
        v-for="caseInfo in casesInfo"
        :key="caseInfo.id"
        :case-info="caseInfo"
        class="main-container"
        @click.stop="
          (e) =>
            e.target.closest('.dropdown-button') ??
            $router.push(`/organisation/case-${caseInfo.id}`)
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CaseCard from '@/components/pages/cases/CaseCard.vue'
import CasesHeader from '@/components/pages/cases/CasesHeader.vue'
import { casesInfo } from '@/stores/mock'

const selected = ref('active')
function selectedEmit(slot: string) {
  selected.value = slot
}
</script>

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
