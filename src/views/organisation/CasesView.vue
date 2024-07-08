<script setup lang="ts">
import CasesHeader from '@/components/layout/Cases/CasesHeader.vue'
import CaseCard from '@/components/layout/Cases/CaseCard.vue'
import { ref } from 'vue'

const casesInfo = [
  {
    id: 1,
    title: 'Наименование кейса',
    tags: {
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20)
    },
    status: 'Подаются решения',
    solutions: 23
  },
  {
    id: 2,
    title: 'Наименование кейса',
    tags: {
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20)
    },
    status: 'Решений нет',
    solutions: 0
  },
  {
    id: 3,
    title: 'Наименование кейса',
    tags: {
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20)
    },
    status: 'Ожидает оценки',
    solutions: 30
  }
]
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

<style scoped>
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
