<script setup lang="ts">
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOButton from '@/components/common/IOButton.vue'

const emits = defineEmits(['selectedEmit'])
function onSelected(slot: string) {
  emits('selectedEmit', slot)
}
const selectOptions = [
  {
    value: 'last',
    label: 'Последние'
  },
  {
    value: 'early',
    label: 'Предыдущие'
  }
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
      <div class="organisation-cases__footer-filter">
        <IOInput type="text" placeholder="Фильтр" background="#fff" />
        <IconFilter />
      </div>
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
  column-gap: 103px;
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
  &-filter {
    position: relative;
    width: 108px;
    transition: $default-transition;

    .input .input__text::placeholder {
      color: $default-black !important;
    }
  }
}
</style>
