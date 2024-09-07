<template>
  <div class="registration-body">
    <img :src="Stage3" alt="Stage 3" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Опишите компанию</h2>
      <i-o-input v-model="data.name">Название</i-o-input>
      <div class="registration-body__select">
        <span> Выберите форму компании </span>
        <i-o-select
          :options="[
            {
              value: 'ooo',
              label: 'ООО'
            },
            {
              value: 'oao',
              label: 'ОАО'
            },
            {
              value: 'ip',
              label: 'ИП'
            }
          ]"
          placeholder="Выберите форму компании"
          label="Выберите форму компании"
          v-model="data.companyForm"
        />
      </div>
      <i-o-input v-model="data.inn">Введите ИНН компании</i-o-input>
      <i-o-button class="registration-body__button" @click="handleSubmit">Готово</i-o-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import { reactive } from 'vue'
import Stage3 from '@/assets/media/img/registration/Stage2-3.png'

const emit = defineEmits(['nextStage'])

const data = reactive({
  name: '',
  inn: '',
  companyForm: ''
})

function handleSubmit() {
  emit('nextStage', {
    from: 'stage3',
    data: data
  })
}
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
