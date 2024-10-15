<template>
  <div class="registration-body">
    <img :src="Stage3" alt="Stage 3" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Опишите компанию</h2>
      <i-o-input v-model="v.data.name.$model" :error="v.data.name.$errors">Название</i-o-input>
      <div class="registration-body__select">
        <span> Выберите форму компании </span>
        <i-o-select
          :options="companyForm"
          placeholder="Выберите форму компании"
          label="Выберите форму компании"
          v-model="data.organization_form"
        />
      </div>
      <i-o-input v-model="v.data.inn.$model" :error="v.data.inn.$errors"
        >Введите ИНН компании</i-o-input
      >
      <i-o-button class="registration-body__button" @click="handleSubmit" :disable="isError"
        >Готово</i-o-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import { computed, onMounted, reactive, ref } from 'vue'
import Stage3 from '@/assets/media/img/registration/Stage2-3.png'
import { defaultErrorMessage } from '@/helpers/vuelidateHelper'
import { useVuelidate } from '@vuelidate/core'
import { useDataStore } from '@/stores/DataStore'
import type { OrganisationFormI } from '@/types/data'

const emit = defineEmits(['nextStage'])

const data = reactive({
  name: '',
  inn: '',
  organization_form: 0
})

const companyForm = ref<OrganisationFormI[]>([])
const dataStore = useDataStore()

const isError = ref(false)

onMounted(async () => {
  companyForm.value = (await dataStore.organisationForm()) ?? []
})

const rules = computed(() => ({
  data: {
    name: defaultErrorMessage,
    inn: defaultErrorMessage
  }
}))

const v = useVuelidate(rules, { data })

const handleSubmit = () => {
  v.value.$touch()
  if (v.value.$errors.length == 0) {
    emit('nextStage', {
      from: 'stage3',
      data: data
    })
  } else {
    isError.value = true
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
