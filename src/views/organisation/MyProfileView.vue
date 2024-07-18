<script setup lang="ts">
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOButton from '@/components/common/IOButton.vue'
import IconLoadComponents from '@/components/icons/IconLoadComponents.vue'
import { ref } from 'vue'
import IOSelect from '@/components/common/IOSelect.vue'

const selected = ref('personal')
</script>

<template>
  <div class="main-container my-profile">
    <h2 class="my-profile__header header-1">Мой профиль</h2>
    <IOSimpleSelect @selectedValue="(slot) => (selected = slot)">
      <template #personal>Личный данные</template>
      <template #safty>Безопасность и вход</template>
    </IOSimpleSelect>
    <div class="my-profile__info" v-if="selected == 'personal'">
      <div class="my-profile__form">
        <IOSelect :options="[{
          value: 'ooo',
          label: 'ООО'
        }, {
          value: 'oao',
          label: 'ОАО'
        },
        {
          value: 'ip',
          label: 'ИП'
        }]" placeholder="Выберите форму компании" label="Выберите форму компании" />
        <IOInput> Название компании</IOInput>
        <IOInput> Телефон компании</IOInput>
        <IOInput> Электронная почта компании</IOInput>
        <IOInput> Веб-сайт компании</IOInput>
        <IOInput> Адрес компании</IOInput>
        <IOInput big> Описание</IOInput>
        <div class="my-profile__buttons">
          <IOButton>Сохранить</IOButton>
          <IOButton outlined>Отменить</IOButton>
        </div>
      </div>
      <div class="my-profile__image">
        <div class="my-profile__image-place">
          <IconLoadComponents />
        </div>
        <IOButton>Загрузить</IOButton>
      </div>
    </div>
    <div v-else class="my-profile__safty">
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Изменение номера телефона</h2>
        <IOInput>Номер телефона</IOInput>
        <IOButton>Изменить</IOButton>
      </div>
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Почта</h2>
        <IOInput placeholder="Укажите вашу почту">E-mail</IOInput>
        <IOButton>Сохранить</IOButton>
      </div>
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Изменение пароля</h2>
        <IOInput type="password">Введите актуальный пароль</IOInput>
        <IOInput>Новый пароль</IOInput>
        <IOButton>Изменить</IOButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-profile {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__info {
    display: flex;
    gap: 116px;
  }

  &__image {
    width: 257px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-place {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 257px;
      height: 257px;
      background: #f6f6f6;
      border: 1.5px dashed #e4e4e7;
      border-radius: 6px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__safty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    &-form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }

    h2 {
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      text-align: left;
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;
  }
}


</style>
