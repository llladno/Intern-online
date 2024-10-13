<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IOActionButton from '@/components/common/IOActionButton.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import IconSolutionPerson from '@/components/icons/IconSolutionPerson.vue'
import router from '@/router'
import { casesInfo } from '@/stores/mock'
import { CasesStatus, type OrganisationCasesI, SolutionsStatus } from '@/types/organisationCasesI'
import IOTags from '@/components/common/IOTags.vue'
import InternBack from '@/components/common/InternBack.vue'

const route = useRoute()
const caseInfo = casesInfo.find((caseInfo: OrganisationCasesI) => caseInfo.id == +route.params.id)
const showMore = ref(false)
</script>

<template>
  <div v-if="caseInfo" class="organisation-case w-full">
    <div class="organisation-case__header main-container">
      <intern-back />
      <div>
        <div class="organisation-case__header-title">
          <h2 class="header-1">
            {{ caseInfo.title }}
          </h2>
          <div
            class="organisation-case__header-status"
            :style="`color: rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]}); background-color: rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]}, 0.2)`"
          >
            •
            {{ caseInfo.status }}
          </div>
        </div>
        <p class="p-12-500">
          <i-o-tags :tags="caseInfo.tags" />
        </p>
      </div>
    </div>
    <div
      v-if="caseInfo.solutions.info.length > 0"
      class="main-container organisation-case__solutions"
    >
      <h3 class="header-2">Решения</h3>
      <div
        class="organisation-case__solutions-items"
        :class="{ 'organisation-case__solutions-items--more': showMore }"
      >
        <div
          v-for="(solution, index) in caseInfo.solutions.info"
          :key="index"
          class="organisation-case__solutions-item"
          @click="router.push(`/organisation/case-${caseInfo.id}/solution-${solution.id || 1}`)"
        >
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
            <icon-solution-person />
            <span class="p-13-500">{{ solution.name }}</span>
          </div>
        </div>
      </div>
      <i-o-action-button class="organisation-case__solutions-button" @click="showMore = !showMore">
        Показать все
      </i-o-action-button>
    </div>
    <div class="main-container organisation-case__info">
      <h3 class="header-2">Общая информация</h3>
      <div class="organisation-case__info-items">
        <div class="organisation-case__info-item">
          <span class="p-13-400 organisation-case__info-item-title">Кол-во решений</span>
          <p class="p-14-500 organisation-case__info-item-solutions">
            <span>{{ caseInfo.solutions.amount }}</span> из 30
          </p>
        </div>
        <div class="organisation-case__info-item">
          <span class="p-13-400 organisation-case__info-item-title">Вид деятельности</span>
          <span class="p-14-500">{{ caseInfo.tags.category.join(', ') }}</span>
        </div>
        <div class="organisation-case__info-item">
          <span class="p-13-400 organisation-case__info-item-title">Опубликован</span>
          <span class="p-14-500">{{ caseInfo.published }}</span>
        </div>
        <div class="organisation-case__info-item">
          <span class="p-13-400 organisation-case__info-item-title">Окончание приёма решений</span>
          <span class="p-14-500 organisation-case__info-item-finished">{{
            caseInfo.finished
          }}</span>
        </div>
      </div>
    </div>
    <div class="main-container organisation-case__description">
      <h3 class="header-2">Описание</h3>
      <p class="p-13-400">{{ caseInfo.description }}<br /></p>
    </div>
    <div class="organisation-case__grid">
      <div class="main-container organisation-case__documents">
        <h3 class="header-2">Документы</h3>
        <div class="organisation-case__documents-items">
          <div
            v-for="(document, index) in caseInfo.documents"
            :key="index"
            class="organisation-case__document"
          >
            <icon-document />
            <span>{{ document }}</span>
          </div>
        </div>
      </div>
      <div class="main-container organisation-case__tarif">
        <h3 class="header-2">Тариф "{{ caseInfo.tags.tarif }}"</h3>
        <span
          class="p-12-500"
          :style="`color: rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]});`"
          >Осталось 7 дней</span
        >
        <ul class="organisation-case__tarif-list">
          <li>Публикация на месяц</li>
          <li>Одно направление по кейсу</li>
          <li>30 решений</li>
        </ul>
        <i-o-action-button class="organisation-case__tarif-button">
          Продлить тариф
        </i-o-action-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.organisation-case {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__header {
    &-title {
      display: flex;
      gap: 10px;
      margin: 10px 0;
    }

    &-status {
      padding: 5px 10px;
      width: fit-content;
      border-radius: 76px;
    }
  }

  &__solutions {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      height: 90px;
      overflow: hidden;
      justify-items: start;
      gap: 10px;

      &--more {
        height: 100%;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      background: rgb($pirple-light, 0.4);
      padding: 9px;
      border-radius: 6px;
      cursor: pointer;
    }

    &-status {
      padding: 3px 8px;
      width: fit-content;
      border-radius: 76px;
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      span {
        color: rgb(40, 40, 45, 0.5);
      }
    }

    &-body {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-button {
      margin-top: 9px;
      align-self: flex-start;
    }
  }

  &__info {
    &-items {
      display: flex;
      gap: 70px;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 7px;

      &-title {
        color: rgb($additional-color, 0.7);
      }

      &-solutions {
        color: rgb($additional-color, 0.7);

        span {
          font-size: 20px;
          font-weight: 500;
        }
      }

      &-finished {
        color: $primary-color;
      }
    }
  }

  &__grid {
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

  &__tarif {
    &-list {
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        font-size: 14px;
        font-weight: 500;
      }

      li::before {
        content: '• ';
      }
    }

    &-button {
      margin-top: 10px;
    }
  }

  &__documents,
  &__tarif,
  &__description,
  &__solution,
  &__info {
    h3 {
      margin-bottom: 12px;
    }
  }
}
</style>
