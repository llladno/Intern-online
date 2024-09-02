<template>
  <div class="registration-body" v-if="stage == 1">
    <img class="registration-body__img" />
    <div class="registration-body__form">
      <h2 class="registration-body__header">Выберите вашу роль</h2>
      <div class="registration-body__select-button">
        <!--          <img src="src/assets/media/img/registration/Ellipse%201.png"/>-->
        <span>Стажер</span>
      </div>
      <div class="registration-body__select-button">
        <!--          <img src="src/assets/media/img/registration/Ellipse%201.png"/>-->
        <span>Менеджер или Владелиц бизнеса</span>
      </div>
      <button-component @click="$emit('nextStage')" class="registration-body__button">
        Готово
      </button-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/shadcn/ui/button/ButtonComponent.vue'

const props = defineProps<{ stage: number, nextStage: () => void }>()
defineEmits(['nextStage'])
</script>


<style scoped lang="scss">

.registration-body {
  &__form {
    padding: 16px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    border: #E4E4E7 1px solid;
    border-radius: 30px;
  }

  &__header {
    font-size: 28px;
    font-weight: 500;
  }

  &__select-button {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 23px;
    height: 60px;
    width: 100%;
    border: #E4E4E7 1px solid;
    border-radius: 8px;
    transition: .5s ease ;

    &:hover {
      background-color: #F3F3F5;
    }

    &:active {
      background-color: #F3F3F5;
    }

    &--active {
      background-color: #F3F3F5;
    }
  }

  &__button {
    margin-top: 8px;
    width: 190px;
  }
}
</style>