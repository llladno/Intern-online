<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import OrganisationCaseSolutionHeader from '@/components/pages/cases/organisationCase/OrganisationCaseSolutionHeader.vue'
import { AlertDialog, AlertDialogContent } from '@/components/shadcn/ui/alert-dialog'

const showEstimateDialog = ref(false)

const documents = ['Документ 1', 'Документ 2', 'Документ 3', 'Документ 4', 'Документ 5']
</script>

<template>
  <div class="organisation-case-solution">
    <organisation-case-solution-header @estimate="showEstimateDialog = true" />
    <alert-dialog :open="showEstimateDialog">
      <alert-dialog-content>
        <div class="organisation-case-solution-estimate">
          <h3 class="header-1">Решение от «Название»</h3>
          <div class="organisation-case-solution-estimate__info">
            <h4 class="p-13-500">Оценка *</h4>
            <p>Тут оценка</p>
            <h4 class="p-13-500">Отзыв</h4>
            <i-o-input full-width placeholder="Тут отзыв" big />
          </div>
          <div class="organisation-case-solution-estimate__buttons">
            <i-o-button full-width outlined @click="showEstimateDialog = false">
              Отмена
            </i-o-button>
            <i-o-button full-width> Оценить </i-o-button>
          </div>
        </div>
      </alert-dialog-content>
    </alert-dialog>
    <div class="main-container organisation-case-solution-description">
      <h3 class="header-2">Описание</h3>
      <p class="p-13-400">
        Повседневная практика показывает, что новая модель организационной деятельности в
        значительной степени обуславливает создание соответствующий условий активизации. Товарищи!
        рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи!
        укрепление и развитие структуры в значительной степени обуславливает создание направлений
        прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения
        кадров позволяет выполнять важные задания по разработке систем массового участия. Не
        следует, однако забывать, что рамки и место обучения кадров в значительной степени
        обуславливает создание модели развития.
      </p>
    </div>
    <div class="main-container organisation-case-solution-documents">
      <h3 class="header-2">Документы</h3>
      <div class="organisation-case-solution-documents__items">
        <div
          v-for="(document, index) in documents"
          :key="index"
          class="organisation-case-solution-documents__item"
        >
          <icon-document />
          <span class="p-12-500">{{ document }}</span>
        </div>
      </div>
    </div>
    <div class="main-container organisation-case-solution-team">
      <h3 class="header-2">Состав команды</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.organisation-case-solution {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin-bottom: 10px;
  }

  &-estimate {
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__buttons {
      width: 100%;
      display: flex;
      gap: 22px;
    }
  }

  &-documents {
    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgb($pirple-light, 0.4);
      padding: 9px 14px 9px 17px;
      border-radius: 6px;
    }
  }
}
</style>
