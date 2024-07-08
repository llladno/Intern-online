<script setup lang="ts">
import OISimpleSelect from '@/components/common/OISimpleSelect.vue'
import { ref } from 'vue'
import OIButton from '@/components/common/OIButton.vue'

const simpleSelected = ref('active')
</script>

<template>
  <div class="organisation__cases-header">
    <!--      TODO посмотреть как писать simple-selected или simple__selected -->
    <h2>Мои кейсы</h2>
    <RouterLink to="/my-cases/add">
      <OIButton>+ Добавить новый кейс</OIButton>
    </RouterLink>
  </div>
  <OISimpleSelect
    @selectedValue="(slot) => (simpleSelected = slot)"
    style="margin-top: 27px"
    class="auth__simpleselect"
  >
    <template #active>Активные</template>
    <template #draft>Черновики</template>
    <template #archive>Архив</template>
  </OISimpleSelect>
</template>

<style scoped>
.organisation__cases-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>