<script setup lang="ts">
import OISimpleSelect from '@/components/common/OISimpleSelect.vue'
import OIInput from '@/components/common/OIInput.vue'
import OIOptionsSelect from '@/components/common/OIOptionsSelect.vue'
import OIButton from '@/components/common/OIButton.vue'
import IconLoadComponents from '@/components/icons/IconLoadComponents.vue'
import { ref } from 'vue'

const selected = ref('personal')
</script>

<template>
  <div class="main-container my-profile">
    <h2>Мой профиль</h2>
    <OISimpleSelect @selectedValue="(slot) => (selected = slot)">
      <template #personal>Личный данные</template>
      <template #safty>Безопасность и вход</template>
    </OISimpleSelect>
    <div class="my-profile__info" v-if="selected == 'personal'">
      <div class="my-profile__form">
        <OIOptionsSelect
          :options="['Обычный', 'Организация']"
          defaultSelect="Выберите вид пользователя"
        >
        </OIOptionsSelect>
        <OIInput> Название компании </OIInput>
        <OIInput> Телефон компании </OIInput>
        <OIInput> Электронная почта компании </OIInput>
        <OIInput> Веб-сайт компании </OIInput>
        <OIInput> Адрес компании </OIInput>
        <OIInput big> Описание </OIInput>
      </div>
      <div class="my-profile__image">
        <div class="my-profile__image-place">
          <IconLoadComponents />
        </div>
        <OIButton>Загрузить</OIButton>
      </div>
    </div>
    <div v-else class="my-profile__safty">
      <h2>Изменение номера телефона</h2>
      <OIInput>Номер телефона</OIInput>
      <OIButton>Изменить</OIButton>
      <h2>Почта</h2>
      <OIInput placeholder="Укажите вашу почту">E-mail</OIInput>
      <OIButton>Сохранить</OIButton>
      <h2>Изменение пароля</h2>
      <OIInput type="password">Введите актуальный пароль</OIInput>
      <OIInput>Новый пароль</OIInput>
      <OIButton>Изменить</OIButton>
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
}

.my-profile__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.my-profile__safty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;

    margin: 10px 0;
  }
}
</style>
