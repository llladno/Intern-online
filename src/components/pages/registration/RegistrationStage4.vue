<template>
  <div class="registration-body">
    <img :src="Stage4" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Чем занимается ваша компания?</h2>
      <i-o-select
        :options="companyActivity"
        placeholder="Сфера деятельности"
        label="Сфера деятельности"
        v-model="activity"
      />
      <i-o-button class="registration-body__button"


                  @click="$emit('nextStage', { from: 'stage4', data: activity })">Готово</i-o-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import { onMounted, ref } from 'vue'
import Stage4 from '@/assets/media/img/registration/Stage4.png'
import { useDataStore } from '@/stores/DataStore'
import IOSelect from '@/components/common/IOSelect.vue'
import type { OrganizationFieldOfActivityI } from '@/types/data'

const activity = ref('')

defineEmits(['nextStage'])

const dataStore = useDataStore()
const companyActivity = ref<OrganizationFieldOfActivityI[]>([])

onMounted(async () => {
  companyActivity.value = (await dataStore.organizationActivity()) ?? []
})
</script>

<style scoped lang="scss">
@import '@/assets/components/layout/registrationStages';
</style>
