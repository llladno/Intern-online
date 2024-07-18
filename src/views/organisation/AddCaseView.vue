<script setup lang="ts">
import OISimpleSelect from '@/components/common/OISimpleSelect.vue'
import { ref } from 'vue'
import CaseTarifCard from '@/components/pages/cases/CaseTarifCard.vue'
import OIOptionsSelect from '@/components/common/OIOptionsSelect.vue'
import OIInput from '@/components/common/OIInput.vue'
import IOButton from '@/components/common/IOButton.vue'
import IOSelect from '@/components/common/IOSelect.vue'

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
    <h2>Новый кейс</h2>
    <OISimpleSelect
      style="margin-top: 16px; margin-bottom: 20px"
      @selectedValue="(slot) => (selected = slot)"
    >
      <template #tarif>Тариф</template>
      <template #info>Общая информация</template>
    </OISimpleSelect>
    <div v-if="selected == 'tarif'" class="new-case__tarifs">
      <CaseTarifCard v-for="tarif in tarifs" :key="tarif.title" :tarif="tarif" />
    </div>
    <div v-else class="new-case">
      <h4>Направление кейса*</h4>
      <IOSelect :options="[{
        value: 'default',
        label: 'Обычный'
      }, {
        value: 'organisation',
        label: 'Организация'
      }]" placeholder="Выберите направление" label="Выберите направление" />
      <OIInput placeholder="Введите название">Название кейса</OIInput>
      <OIInput big placeholder="Введите описание кейса.."> Описание кейса</OIInput>
      <h3>Требование для участников</h3>
      <h4>Участие</h4>
      <IOSelect :options="[{
        value: 'self', label: 'Личное'}, {value: 'command', label: 'Команда'},]" placeholder="Выберите участие"
                label="Выберите участие" />
      <div>
        <OIInput placeholder="До">Кол-во решений*</OIInput>
        <p>Введите число от 1 до 30</p>
      </div>
      <div class="new-case__buttons">
        <IOButton>Опубликовать</IOButton>
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

.new-case__age {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

h3 {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin: 20px 0 5px 0;
}

h4 {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  margin-top: 10px;
}

p {
  font-size: 10px;
  color: #28282d;
}
</style>
