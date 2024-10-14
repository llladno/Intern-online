<template>
  <div class="date">
    <IOCustomSelect
      :options="days"
      v-model="day"
      @click="validateDate"
      placeholder="День"
      v-if="!isDays"
      id="day"
      :isLabel="false"
    />
    <IOCustomSelect
      id="month"
      :options="months"
      v-model="month"
      @click="validateDate"
      placeholder="Месяц"
      :isLabel="false"
    />
    <IOCustomSelect
      id="year"
      :options="years"
      v-model="year"
      @click="validateDate"
      placeholder="Год"
      :isLabel="false"
    />

    <p v-show="errorMessage" class="date__error">{{ errorMessage }}</p>
    <div>
      <span>Day:{{ day }}</span>
      <span>Month:{{ month }}</span>
      <span>Year:{{ year }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOCustomSelect from '@/components/common/IOCustomSelect.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'

defineProps<{
  isDays?: boolean
}>()

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

const validateDate = () => {
  const dayNum = Number(day.value) ?? 0
  const monthNum = Number(month.value) ?? 0
  const yearNum = Number(year.value) ?? 0

  // if (dayNum < 1 || dayNum > 31) {
  //   errorMessage.value = 'Введите корректный день.'
  //   return
  // }

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

  console.log(isLeapYear)

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
.date {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 100%;

  &__error {
    position: absolute;
    bottom: -25px;
    left: 0;
    color: $error-color;
  }
}
</style>
