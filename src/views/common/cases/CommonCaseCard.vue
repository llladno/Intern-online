<template>
  <div
    class="main-container main-container--hover common-case-card"
    @click="$router.push(`/case-${caseInfo.id}`)"
  >
    <div class="common-case-card__side common-case-card__side--left">
      <div class="common-case-card__preview">
        <div class="common-case-card__preview-img" />
        <span>ООО "ЗМС"</span>
      </div>
      <div class="common-case-card__info">
        <h3 class="header-3">Заголовок</h3>
        <i-o-tags :tags="caseInfo.tags" />
        <p class="p-13-400 common-case-card__description">
          {{ caseInfo.description }}
        </p>
      </div>
    </div>
    <div class="common-case-card__side common-case-card__side--right">
      <icon-save-mark :width="16" :height="21" class="common-case-card__save" />
      <div class="common-case-card__solutions">
        <span class="common-case-card__solutions-title">Кол-во решений:</span>
        <p class="p-13-400 common-case-card__solutions-amount">
          <span class="common-case-card__solutions-span">{{ caseInfo.solutions.amount }}</span> из
          30
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrganisationCasesI } from '@/types/organisationCasesI'
import IOTags from '@/components/common/IOTags.vue'
import IconSaveMark from '@/components/icons/IconSaveMark.vue'

defineProps<{ caseInfo: OrganisationCasesI }>()
</script>

<style scoped lang="scss">
.common-case-card {
  display: flex;
  justify-content: space-between;

  &__side {
    &--left {
      display: flex;
      gap: 50px;
    }

    &--right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      height: 100%;
    }
  }

  &__description {
    width: 90%;
  }

  &__preview {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    &-img {
      width: 103px;
      height: 103px;
      background-color: $primary-color;
      border-radius: 50%;
    }
  }

  &__save {
    * {
      transition: all 0.2s ease;
    }
    &:hover {
      cursor: pointer;

      * {
        stroke: $primary-color;
      }

      svg {
        fill: $primary-color;
        overflow: hidden;
      }
    }

    &:active {
      * {
        fill: $primary-color;
        stroke: $primary-color;
      }
    }
  }

  &__solutions {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 9px;

    &-title {
      white-space: nowrap;
    }

    &-amount {
      color: $default-black;
      opacity: 0.7;
    }
    &-span {
      font-size: 20px;
      font-weight: 500;
      color: black;
      opacity: 1;
    }
  }
}
</style>
