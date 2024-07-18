<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconBookMark from '@/components/icons/IconBookMark.vue'
import IconClock from '@/components/icons/IconClock.vue'
import IconDotesTemp from '@/components/icons/IconDotesTemp.vue'
import { CasesStatus } from '@/types/organisationCasesI'

defineProps({
  caseInfo: Object
})
</script>

<template>
  <div class="case-card" v-if="caseInfo">
    <div
      class="case-card__line"
      :style="{ background: `rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]}, 1)` }" />
    <div class="case-card__container">
      <div>
        <div
          class="case-card__status"
          :style="`color: rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]}); background-color: rgb(${CasesStatus[caseInfo.status as keyof typeof CasesStatus]}, 0.2)`"
        >
          •
          {{ caseInfo.status }}
        </div>
        <h3 class="case-card__title header-3">{{ caseInfo.title }}</h3>
        <div class="case-card__tags">
          <div class="case-card__tag">
            <IconBookMark />
            <span>{{ caseInfo.tags.category }}</span>
          </div>
          <div class="case-card__tag">
            <IconStar />
            <span>{{ caseInfo.tags.tarif }}</span>
          </div>
          <div class="case-card__tag">
            <IconClock />
            <span>{{ caseInfo.tags.date.toLocaleDateString() }}</span>
          </div>
        </div>
        <p class="p-13-400">
          Кейс — это рассказ о реальном случае, связанном с продуктом компании. В нём показываются
          интересные идеи или решения определённой проблемы, которые предлагает организация. Этот
          инструмент распространён в сфере B2B, например, в консалтинге, в сфере продвижения...
        </p>
      </div>
      <div class="case-card__right-side">
        <IconDotesTemp />
        <div>
          <p class="case-card__count p-13-400">Кол-во решений:</p>
          <p class="case-card__solutions">
            <span class="case-card__solutions-number">{{ caseInfo.solutions }}</span> из 30
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/base/variables.scss';
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
    padding: 5px 10px;
    width: fit-content;
    border-radius: 76px;
  }

  &__title {
    margin: 5px 0 8px 0;
    text-align: left;
  }

  &__tags {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 11px;
  }

  &__tag {
    display: flex;
    gap: 3px;

    & span {
      font-size: 12px;
      font-weight: 500;
      line-height: 16.8px;
      text-align: left;
      color: #535357;
    }
  }

  &__right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 300px;
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
