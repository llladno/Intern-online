<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import CaseTarifCard from '@/components/pages/cases/CaseTarifCard.vue'

const selected = ref('tarif')

const tarifs = [
  {
    title: 'Тариф "Лайт"',
    stars: 3,
    cost: 500,
    advantages: [
      'Публикация на месяц (с возможностью продления)',
      '1 направление по кейсу',
      '30 решений'
    ]
  },
  {
    title: 'Тариф "Стандарт"',
    stars: 4,
    cost: 900,
    advantages: [
      'Публикация на 2 месяца (с возможностью продления)',
      'От 1 до 2 направлений по кейсу',
      '30 решений',
      'Поднятие в ленте каждые 15 дней',
      'Выделение кейса на 10 дней'
    ]
  },
  {
    title: 'Тариф "Премиум"',
    stars: 5,
    cost: 1300,
    advantages: [
      'Публикация на 3 месяца (с возможностью продления)',
      'От 1 до 3 направлений по кейсу',
      'Неограниченное кол-во решений',
      'Поднятие в ленте каждые 5 дней',
      'Выделение кейса на 3 месяца',
      'Чат с участниками'
    ]
  }
]
</script>

<template>
  <div class="main-container">
    <h2 class="header-1">Новый кейс</h2>
    <i-o-simple-select
      style="margin-top: 16px; margin-bottom: 20px"
      @selected-value="(slot) => (selected = slot)"
    >
      <template #tarif> Тариф </template>
      <template #info> Общая информация </template>
    </i-o-simple-select>
    <div v-if="selected == 'tarif'" class="new-case__tarifs">
      <case-tarif-card v-for="tarif in tarifs" :key="tarif.title" :tarif="tarif" />
    </div>
    <div v-else class="new-case">
      <h3 class="p-13-500">Направление кейса*</h3>
      <i-o-select
        :options="[
          {
            value: 'default',
            label: 'Обычный'
          },
          {
            value: 'organisation',
            label: 'Организация'
          }
        ]"
        placeholder="Выберите направление"
        label="Выберите направление"
      />
      <i-o-input placeholder="Введите название"> Название кейса </i-o-input>
      <i-o-input big placeholder="Введите описание кейса.."> Описание кейса </i-o-input>
      <h3 class="p-18-500">Требование для участников</h3>
      <span class="p-13-500">Участие</span>
      <i-o-select
        :options="[
          {
            value: 'self',
            label: 'Личное'
          },
          { value: 'command', label: 'Команда' }
        ]"
        placeholder="Выберите участие"
        label="Выберите участие"
      />
      <div>
        <i-o-input placeholder="До"> Кол-во решений* </i-o-input>
        <span class="p-10-500">Введите число от 1 до 30</span>
      </div>
      <div class="new-case__buttons">
        <i-o-button>Опубликовать</i-o-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-case__tarifs {
  display: flex;
  gap: 20px;
}

.new-case {
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: self-start;
  gap: 15px;
}
</style>
