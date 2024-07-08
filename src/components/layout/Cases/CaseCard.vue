<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import IconBookMark from '@/components/icons/IconBookMark.vue'
import IconClock from '@/components/icons/IconClock.vue'

defineProps({
  caseInfo: Object
})

enum Status {
  'Подаются решения' = '218, 133, 44'
}

</script>

<template>
  <div class="case-card">
    <div class="case-card__line" :style="{background: Status[caseInfo.status]}"></div>
    <div>
      <div>
        <div class="case-card__status"
             :style="`color: rgb(${Status[caseInfo.status]}); background-color: rgb(${Status[caseInfo.status]}, 0.2)`">•
          {{ caseInfo.statusn }}
        </div>
        <h3>{{ caseInfo.title }}</h3>
        <div>
          <div>
            <IconBookMark />
            <span>{{ caseInfo.tags.category }}</span>
          </div>
          <div>
            <IconStar />
            <span>{{ caseInfo.tags.tarif }}</span>
          </div>
          <div>
            <IconClock />
            <span>{{ caseInfo.tags.date.toLocaleDateString() }}</span>
          </div>
        </div>
        <p>Кейс — это рассказ о реальном случае, связанном с продуктом компании. В нём показываются интересные идеи или
          решения определённой проблемы, которые предлагает организация.
          Этот инструмент распространён в сфере B2B, например, в консалтинге, в сфере продвижения...</p>
      </div>
      <div>Три точки
        и количество решений
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.case-card {
  position: relative;
  display: flex;
  overflow: hidden;

  &__status {
    padding: 8px;
    width: fit-content;
    border-radius: 76px;
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