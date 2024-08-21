<template>
  <div class="main-container user-profile">
    <h2 class="user-profile__header header-1">Мой профиль</h2>
    <IOSimpleSelect @selectedValue="(slot) => (selected = slot)">
      <template #personal>Личный данные</template>
      <template #safty>Безопасность и вход</template>
    </IOSimpleSelect>
    <div class="user-profile__info" v-if="selected == 'personal'">
      <VerificationAccount />
      <div class="user-profile__info-form">
        <IOInput>Фамилия</IOInput>
        <IOInput>Имя</IOInput>
        <IOInput>Отчество</IOInput>
        <IOInputDate />
        <IOInput>Ваш веб-сайт </IOInput>
        <IOInput placeholder="Опишите наиболее подробно свои навыки/достижения" big
          >О себе
        </IOInput>
      </div>
      <div class="user-profile__info-education">
        <h3 class="p-18-500">Образование</h3>
        <IOSelect
          id="education"
          placeholder="Выберите уровень образования"
          :options="educationLevels"
          v-model="education"
          >Уровень образования</IOSelect
        >
        <p>value: {{ education }}</p>
        <IOModal label="Добавить место учебы">
          <h2 class="header-1">Знание программ</h2>
          <p class="p-13-400 text-center">
            Выберите программы и оцените от 1 до 10 <br />
            уровень владения ими
          </p>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «DevOps инженер»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>
        <UserExperience />
        <h3 class="p-18-500">Ключевые навыки</h3>
        <IOModal label="Добавить навыки">
          <h2 class="header-1">Знание программ</h2>
          <p class="p-13-400 text-center">
            Выберите программы и оцените от 1 до 10 <br />
            уровень владения ими
          </p>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «DevOps инженер»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>
        <h3 class="p-18-500">Знание программ</h3>
        <IOModal label="Добавить программы">
          <h2 class="header-1">Знание программ</h2>
          <p class="p-13-400 text-center">
            Выберите программы и оцените от 1 до 10 <br />
            уровень владения ими
          </p>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «DevOps инженер»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>
        <h3 class="p-18-500">Дипломы</h3>
        <IOModal label="Добавить фотографии">
          <h2 class="header-1">Знание программ</h2>
          <p class="p-13-400 text-center">
            Выберите программы и оцените от 1 до 10 <br />
            уровень владения ими
          </p>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «DevOps инженер»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>
        <h3 class="p-18-500">Портфолио</h3>
        <IOModal label="Добавить файл">
          <h2 class="header-1">Знание программ</h2>
          <p class="p-13-400 text-center">
            Выберите программы и оцените от 1 до 10 <br />
            уровень владения ими
          </p>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «DevOps инженер»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'
// import IOButton from '@/components/common/IOButton.vue'
import VerificationAccount from '@/components/pages/VerificationAccount.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOModal from '@/components/common/IOModal.vue'
import UserExperience from '@/views/user/UserExperience.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'

const selected = ref('personal')

const education = ref<number | string | null>(null)
const skill = ref<number | string | null>(null)

const educationLevels: SelectPropsOptionI[] = [
  { id: 1, value: 'none', label: 'Без образования' },
  { id: 2, value: 'primary', label: 'Начальное образование' },
  { id: 3, value: 'basic_secondary', label: 'Основное общее образование' },
  { id: 4, value: 'secondary', label: 'Среднее общее образование' },
  { id: 5, value: 'secondary_professional', label: 'Среднее профессиональное образование' },
  { id: 6, value: 'higher', label: 'Высшее образование' },
  { id: 7, value: 'postgraduate', label: 'Послевузовское образование' },
  { id: 8, value: 'doctoral', label: 'Доктор наук' }
]
const skills: SelectPropsOptionI[] = [
  { id: 1, value: 'none', label: 'Нет навыков' },
  { id: 2, value: 'beginner', label: 'Начальный уровень' },
  { id: 3, value: 'intermediate', label: 'Средний уровень' },
  { id: 4, value: 'advanced', label: 'Продвинутый уровень' },
  { id: 5, value: 'expert', label: 'Экспертный уровень' },
  { id: 6, value: 'fullstack', label: 'Full Stack разработчик' },
  { id: 7, value: 'frontend', label: 'Frontend разработчик' },
  { id: 8, value: 'backend', label: 'Backend разработчик' },
  { id: 9, value: 'devops', label: 'DevOps инженер' },
  { id: 10, value: 'data_scientist', label: 'Data Scientist' },
  { id: 11, value: 'machine_learning', label: 'Специалист по машинному обучению' }
]
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__info {
    width: 388px;

    &-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-top: 18px;
    }

    &-education {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-top: 50px;
    }
  }
}
</style>
