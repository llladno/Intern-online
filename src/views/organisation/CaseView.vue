<script setup lang="ts">
import { casesInfo } from '@/stores/mock'
import { useRoute } from 'vue-router'
import { type OrganisationCasesI, SolutionsStatus } from '@/types/organisationCasesI'
import IconSolutionPerson from '@/components/icons/IconSolutionPerson.vue'
import IconDocument from '@/components/icons/IconDocument.vue'

const route = useRoute()
const caseInfo = casesInfo.find((caseInfo: OrganisationCasesI) => caseInfo.id == +route.params.id)
console.log(caseInfo)
</script>

<template>
  <div class="organisation-case w-full" v-if="caseInfo">
    <div class="organisation-case__header main-container">
      <RouterLink to="/my-cases"> Назад</RouterLink>
      <div>
        <div>
          <h2 class="header-1">{{ caseInfo.title }}</h2>
          <p class="p-12-500">{{caseInfo.tags.category}}</p>
        </div>
      </div>
    </div>
    <div class="main-container organisation-case__solutions" v-if="caseInfo.solutions.info.length > 0">
      <h3 class="header-2">Решения</h3>
      <div class="organisation-case__solutions-items">
        <div class="organisation-case__solutions-item" v-for="(solution, index) in caseInfo.solutions.info" :key="index">
          <div class="organisation-case__solutions-header">
            <div
              class="organisation-case__solutions-status p-10-500"
              :style="`color: rgb(${SolutionsStatus[solution.status as keyof typeof SolutionsStatus]}); background-color: rgb(${SolutionsStatus[solution.status as keyof typeof SolutionsStatus]}, 0.2)`"
            >
              •
              {{ solution.status }}
            </div>
            <span class="p-10-500">{{ solution.lastUpdated.toLocaleString() }}</span>
          </div>
          <div class="organisation-case__solutions-body">
            <IconSolutionPerson />
            <span class="p-13-500">{{solution.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-container organisation-case__info">
      <h3 class="header-2">Общая информация</h3>
      <div class="organisation-case__info-items">
        <div class="organisation-case__info-item">
          <p class="p-13-400">Вид деятельности</p>
          <p class="p-14-500">{{ caseInfo.tags.category}}</p>
        </div>
        <div class="organisation-case__info-item">
          <p class="p-13-400">Опубликован</p>
          <p class="p-14-500">{{ caseInfo.published }}</p>
        </div>
        <div class="organisation-case__info-item">
          <p class="p-13-400">Окончание приёма решений</p>
          <p class="p-14-500">{{ caseInfo.finished }}</p>
        </div>
      </div>
    </div>
    <div class="main-container organisation-case__description">
      <h3 class="header-2">Описание</h3>
      <p class="p-13-400">{{ caseInfo.description }}<br></p>
    </div>
    <div class="organisation-case__grid">
      <div class="main-container organisation-case__documents">
        <h3 class="header-2">Документы</h3>
        <div class="organisation-case__documents-items">
          <div
            class="organisation-case__document"
            v-for="(document, index) in caseInfo.documents"
            :key="index"
          >
            <IconDocument />
            <span>{{ document }}</span>
          </div>
        </div>
      </div>
      <div class="main-container organisation-case__tarif">
        <h3 class="header-2">Тариф "{{caseInfo.tags.tarif}}"</h3>
        <span>Осталось 7 дней</span>
        <ul>
          <li>Публикация на месяц</li>
          <li>Одно направление по кейсу</li>
          <li>30 решений</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.organisation-case {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__solutions{
    &-items{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-items: start;
    }
    &-item{
      display: flex;
      flex-direction: column;
      min-width: 200px;
      gap: 10px;
      background: rgb($pirple-light, 0.4);
      padding: 9px;
      border-radius: 6px;
    }

    &-status{
      padding: 3px 8px;
      width: fit-content;
      border-radius: 76px;
    }
    &-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      span {
        color: rgb(40, 40, 45, 0.5);
      }
    }
    &-body{
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__info{
    &-items{
      display: flex;
      gap: 70px;
    }
  }

  &__grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  &__documents {
    grid-column: 1/3;

    &-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }

  &__document {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgb($pirple-light, 0.4);
    padding: 9px 14px 9px 17px;
    border-radius: 6px;
  }
}
</style>
