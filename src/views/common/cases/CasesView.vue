<template>
  <div class="cases">
    <div class="main-container">
      <div class="cases-header">
        <h2 class="header-1">Кейсы</h2>
        <div class="cases-header__container">
          <div class="cases-header__search">
            <i-o-input type="text" placeholder="Поиск" background="#fff" padding="33" />
            <icon-search />
          </div>
          <cases-header-filter
            :options="[
              { value: 'default', label: 'Маркетинг' },
              { value: 'it', label: 'IT' }
            ]"
            placeholder="Фильтр"
          />
          <i-o-select
            :options="[
              { value: 'default', label: 'Сначала новые' },
              { value: 'it', label: 'Сначала старые' }
            ]"
            placeholder="Сначала новые"
          />
        </div>
      </div>
    </div>
    <common-case-card v-for="(caseInfo, index) in casesInfo" :key="index" :case-info="caseInfo" />
  </div>
</template>

<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import CasesHeaderFilter from '@/components/pages/cases/CasesHeaderFilter.vue'
import { casesInfo } from '@/stores/mock'
import CommonCaseCard from '@/views/common/cases/CommonCaseCard.vue'
</script>

<style scoped lang="scss">
.cases {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__container {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    &__search {
      position: relative;
      width: 319px;
      transition: $default-transition;
    }
  }
}
</style>
