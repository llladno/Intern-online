<template>
  <div class="birthday">
    <IOSelect
      :options="days"
      v-model="day"
      @change="validateDate"
      placeholder="День"
      v-if="isDays"
    />
    <IOSelect :options="months" v-model="month" @change="validateDate" placeholder="Месяц" />
    <IOSelect :options="years" v-model="year" @change="validateDate" placeholder="Год" />

    <p v-show="errorMessage" class="birthday__error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOSelect from '@/components/common/IOSelect.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'

withDefaults(
  defineProps<{
    isDays?: boolean
  }>(),
  { isDays: true }
)

const day = ref<number | string | null>(null)
const month = ref<number | string | null>(null)
const year = ref<number | string | null>(null)
const errorMessage = ref<string>('')
const currentYear = new Date().getFullYear()

const days: SelectPropsOptionI[] = Array.from({ length: 31 }, (_, i) => ({
  id: `day-${i + 1}`,
  value: i + 1,
  label: (i + 1).toString()
}))
console.log(days)

const months: SelectPropsOptionI[] = Array.from({ length: 12 }, (_, i) => ({
  id: `month-${i + 1}`,
  value: i + 1,
  label: (i + 1).toString()
}))

const years: SelectPropsOptionI[] = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => ({
  id: `year-${currentYear - i}`,
  value: currentYear - i,
  label: (currentYear - i).toString()
}))

// const validateDate = () => {
//       const dayNum = day.value ?? 0;
//       const monthNum = month.value ?? 0;

//      if (monthNum === 2 && dayNum > '29') {
//         errorMessage.value = 'Февраль может иметь максимум 29 дней.';
//       } else if (
//         (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) &&
//         dayNum > '30'
//       ) {
//         errorMessage.value = 'Эти месяцы могут иметь максимум 30 дней.';
//       } else {
//         errorMessage.value = '';
//       }
// }
const validateDate = () => {
  const dayNum = Number(day.value) ?? 0
  const monthNum = Number(month.value) ?? 0
  const yearNum = Number(year.value) ?? 0

  console.log(dayNum, monthNum, yearNum)

  if (dayNum < 1 || dayNum > 31) {
    errorMessage.value = 'Введите корректный день.'
    return
  }

  // if (monthNum < 1 || monthNum > 12) {
  //   errorMessage.value = 'Введите корректный месяц.';
  //   return;
  // }

  // if (yearNum > currentYear) {
  //   errorMessage.value = 'Год не может быть больше текущего.'
  //   return
  // }

  const isLeapYear = (yearNum: number): boolean => {
    return (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0
  }

  if (monthNum === 2) {
    if (dayNum > (isLeapYear(yearNum) ? 29 : 28)) {
      errorMessage.value =
        'Февраль может иметь максимум ' + (isLeapYear(yearNum) ? 29 : 28) + ' дней.'
      return
    }
  } else if ([4, 6, 9, 11].includes(monthNum) && dayNum > 30) {
    errorMessage.value = 'Эти месяцы могут иметь максимум 30 дней.'
    return
  }
  errorMessage.value = ''
}
</script>

<style scoped lang="scss">
.birthday {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;

  &__error {
    position: absolute;
    bottom: -25px;
    left: 0;
    color: $error-color;
  }
}
</style>
