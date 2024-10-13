<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IconDocument from '@/components/icons/IconDocument.vue'
import OrganisationCaseSolutionHeader from '@/components/pages/cases/organisationCase/OrganisationCaseSolutionHeader.vue'
import { AlertDialog, AlertDialogContent } from '@/components/shadcn/ui/alert-dialog'
import InternEstimate from '@/components/common/InternEstimate.vue'

const showEstimateDialog = ref<boolean>(false)
const currentStep = ref<number>(1)
const estimateRef = ref<HTMLDivElement | null>(null)

const documents = ['Документ 1', 'Документ 2', 'Документ 3', 'Документ 4', 'Документ 5']

enum EstimateTitleEnum {
  'Понимание и анализ задачи' = 1,
  'Качество и корректность решения' = 2,
  'Ясность и презентация решения' = 3
}

const stepsSlides = {
  1: [
    'Насколько решение точно и полно отражает суть задачи?',
    'Насколько решение точно и полно учитывает ключевые аспекты проблемы?'
  ],
  2: ['Насколько решение корректно?', 'Учитывает ли оно все ключевые аспекты задачи?'],
  3: [
    'Насколько понятно и структурировано представлено решение?',
    'Насколько хорошо используется визуализация, если она есть?'
  ]
}

const nextStep = () => {
  if (currentStep.value < 3) {
    estimateRef.value?.classList.add('organisation-case-solution-estimate--animate')
    setTimeout(() => {
      currentStep.value++
      estimateRef.value?.classList.remove('organisation-case-solution-estimate--animate')
    }, 400)
  } else {
    showEstimateDialog.value = false
  }
}

const closeEstimateDialog = () => {
  showEstimateDialog.value = false
  currentStep.value = 1
}
</script>

<template>
  <div class="organisation-case-solution">
    <organisation-case-solution-header @estimate="showEstimateDialog = true" />
    <alert-dialog :open="showEstimateDialog">
      <alert-dialog-content>
        <div ref="estimateRef" class="organisation-case-solution-estimate">
          <div class="organisation-case-solution-estimate__header">
            <h4 class="p-16-500">{{ EstimateTitleEnum[currentStep] }}</h4>
            <span class="organisation-case-solution-estimate__current-step">
              Шаг {{ currentStep }}/3
            </span>
          </div>
          <div class="organisation-case-solution-estimate__line" />
          <div
            class="organisation-case-solution-estimate__info"
            v-for="(step, index) in stepsSlides[currentStep]"
            :key="index"
          >
            <h4 class="p-13-500">{{ step }}</h4>
            <intern-estimate :estimate-counts="10" />
            <i-o-input full-width placeholder="Тут отзыв" big />
          </div>
          <div class="organisation-case-solution-estimate__buttons">
            <i-o-button full-width outlined @click="closeEstimateDialog" thin> Отмена </i-o-button>
            <i-o-button thin full-width @click="nextStep">{{
              currentStep == 3 ? 'Завершить' : 'Далее'
            }}</i-o-button>
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 680px;
    opacity: 1;
    transition: 0.4s ease;

    &--animate {
      opacity: 0;
    }

    &__header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    &__line {
      width: 100%;
      height: 1px;
      background: $pirple-light;
    }

    &__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
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
