<script setup lang="ts">
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'

const emits = defineEmits(['selectedEmit'])
function onSelected(slot: string) {
  emits('selectedEmit', slot)
}
</script>

<template>
  <div class="organisation__cases-header">
    <!--      TODO посмотреть как писать simple-selected или simple__selected -->
    <h2>Мои кейсы</h2>
    <RouterLink to="/my-cases/add">
      <IOButton>+ Добавить новый кейс</IOButton>
    </RouterLink>
  </div>
  <IOSimpleSelect @selectedValue="onSelected" style="margin-top: 27px" class="auth__simpleselect">
    <template #active>Активные</template>
    <template #draft>Черновики</template>
    <template #archive>Архив</template>
  </IOSimpleSelect>
</template>

<style scoped>
.organisation__cases-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
