<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import InternBack from '@/components/common/InternBack.vue'

defineEmits(['estimate'])
</script>

<template>
  <header class="main-container organization-case-solution-header">
    <intern-back class="organization-case-solution-header__back" />
    <div class="organization-case-solution-header__container">
      <div class="organization-case-solution-header__info">
        <img src="../../../../assets/media/img/img.png" />
        <div class="organization-case-solution-header__title">
          <h3 class="header-1">Название</h3>
          <span class="p-12-500">22.06.2022</span>
        </div>
        <div class="organization-case-solution-header__status" />
      </div>
      <i-o-button @click="$emit('estimate')"> Оценить </i-o-button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.organization-case-solution-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  &__back {
    margin-bottom: 9px;
  }

  &__info {
    display: flex;
    gap: 10px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
