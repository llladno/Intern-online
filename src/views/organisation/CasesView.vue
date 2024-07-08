<script setup lang="ts">
import CasesHeader from '@/components/layout/Cases/CasesHeader.vue'
import CaseCard from '@/components/layout/Cases/CaseCard.vue'

const casesInfo = [{
  id: 1,
  title: 'Наименование кейса',
  tags: {
    category: 'Маркетинг',
    tarif: 'Лайт',
    date: new Date(2024, 5, 20)
  },
  status: 'Подаются решения',
  solutions: 23,
}]
</script>

<template>
  <div class="organisation">
    <div class="organisation__cases main-container">
      <CasesHeader />
    </div>
    <CaseCard v-for="caseInfo in casesInfo" :key="caseInfo.id" :caseInfo="caseInfo"  class="main-container"/>
  </div>

</template>

<style scoped>
.organisation{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>