<template>
  <div v-if="caseInfo" class="case-card">
    <div class="case-card__container">
      <div>
        <div
          :class="[
            'case-card__status',
            `case-card__status--${CasesStatusEnum[caseInfo.status as keyof typeof CasesStatusEnum]}`
          ]"
        >
          •
          {{ caseInfo.status }}
          {{
            caseInfo.status === 'Подаются решения' && caseInfo.solutions
              ? `${caseInfo.solutions.amount} из 30`
              : null
          }}
        </div>
        <h3 class="case-card__title header-3">
          {{ caseInfo.title }}
        </h3>
        <i-o-tags organistaion :tags="caseInfo.tags" />
        <p class="p-13-400">
          Кейс — это рассказ о реальном случае, связанном с продуктом компании. В нём показываются
          интересные идеи или решения определённой проблемы, которые предлагает организация. Этот
          инструмент распространён в сфере B2B, например, в консалтинге, в сфере продвижения...
        </p>
      </div>
      <div class="case-card__right-side">
        <cases-dropdown-menu />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CasesDropdownMenu from './CasesDropdownMenu.vue'
import { CasesStatusEnum, type OrganizationCasesI } from '@/types/organizationCasesI'
import IOTags from '@/components/common/IOTags.vue'

defineProps<{ caseInfo: OrganizationCasesI }>()
</script>

<style scoped lang="scss">
.case-card {
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  &__status {
    padding: 4px 8px;
    width: fit-content;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 500;

    &--pending {
      color: $accent-orange-600;
      background: $accent-orange-50;
    }

    &--empty {
      color: $primary-purple-600;
      background: $primary-purple-50;
    }

    &--end {
      color: $secondary-red-700;
      background: $secondary-red-50;
    }
  }

  &__title {
    margin: 8px 0 8px;
    text-align: left;
  }

  &__right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    justify-content: space-between;
  }

  &__count {
    text-align: left;
    color: #69696c;
    margin-bottom: 5px;
  }

  &__solutions {
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #949496;

    &-number {
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;

      color: #7862eb;
    }
  }
}

.case-card__line {
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  height: 100%;
}
</style>
