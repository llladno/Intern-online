<template>
  <div class="organisation-cases__header">
    <h2 class="header-1">Мои кейсы</h2>
    <div class="organisation-cases__footer-right">
      <i-o-simple-select class="auth__simpleselect" @selected-value="onSelected">
        <template #active> Активные </template>
        <template #draft> Черновики </template>
        <template #archive> Архив </template>
      </i-o-simple-select>
      <cases-header-filter :options="optionsFiltered" placeholder="Фильтр" />
      <div class="organisation-cases__footer-sort">
        <i-o-select class="p-13-500" placeholder="Новые" label="Новые" :options="selectOptions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IOSelect from '@/components/common/IOSelect.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import CasesHeaderFilter from '@/components/pages/cases/CasesHeaderFilter.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'

const emits = defineEmits(['selectedEmit'])
function onSelected(slot: string) {
  emits('selectedEmit', slot)
}

const selectOptions: SelectPropsOptionI[] = [
  { id: '1', value: 'last', label: 'Последние' },
  { id: '2', value: 'early', label: 'Предыдущие' }
]

const optionsFiltered: SelectPropsOptionI[] = [
  { id: '1', label: 'Vue', value: 'Vue' },
  { id: '2', label: 'React', value: 'React' },
  { id: '3', label: 'Angular', value: 'Angular' },
  { id: '4', label: 'PHP', value: 'PHP' },
  { id: '5', label: 'Label', value: 'Label' },
  { id: '6', label: 'Label1', value: 'Label1' },
  { id: '7', label: 'Label2', value: 'Label2' }
]
</script>

<style lang="scss" scoped>
.organisation-cases__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.organisation-cases__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 40px;
  height: 40px;
  margin-top: 16px;

  &-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 13px;
    height: 100%;
  }

  &-search {
    position: relative;
    width: 319px;
    transition: $default-transition;
  }
  &-sort {
    width: 170px;
  }
}
</style>
