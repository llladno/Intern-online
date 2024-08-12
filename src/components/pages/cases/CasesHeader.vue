<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOButton from '@/components/common/IOButton.vue'
import CasesHeaderFilter from '@/components/pages/cases/CasesHeaderFilter.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'

const emits = defineEmits(['selectedEmit'])
function onSelected(slot: string) {
  emits('selectedEmit', slot)
}

const selectOptions: SelectPropsOptionI[] = [
  {
    id: 1,
    value: 'last',
    label: 'Последние'
  },
  {
    id: 2,
    value: 'early',
    label: 'Предыдущие'
  }
]

const optionsFiltered: SelectPropsOptionI[] = [
  { id: 1, label: 'Vue', value: 'Vue' },
  { id: 2, label: 'React', value: 'React' },
  { id: 3, label: 'Angular', value: 'Angular' },
  { id: 4, label: 'PHP', value: 'PHP' },
  { id: 5, label: 'Label', value: 'Label' },
  { id: 6, label: 'Label1', value: 'Label1' },
  { id: 7, label: 'Label2', value: 'Label2' }
]
</script>

<template>
  <div class="organisation-cases__header">
    <!--      TODO посмотреть как писать simple-selected или simple__selected -->
    <h2 class="header-1">Мои кейсы</h2>
    <RouterLink to="/my-cases/add">
      <IOButton>+ Добавить новый кейс</IOButton>
    </RouterLink>
  </div>
  <div class="organisation-cases__footer">
    <IOSimpleSelect @selectedValue="onSelected" class="auth__simpleselect">
      <template #active>Активные</template>
      <template #draft>Черновики</template>
      <template #archive>Архив</template>
    </IOSimpleSelect>
    <div class="organisation-cases__footer-right">
      <div class="organisation-cases__footer-search">
        <IOInput type="text" placeholder="Поиск" background="#fff" padding="33" />
        <IconSearch />
      </div>
      <CasesHeaderFilter :options="optionsFiltered" placeholder="Фильтр" />
      <div class="organisation-cases__footer-sort">
        <IOSelect class="p-13-500" placeholder="Новые" label="Новые" :options="selectOptions" />
      </div>
    </div>
  </div>
</template>

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
