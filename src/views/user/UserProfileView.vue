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
        <!-- <p>value: {{ education }}</p> -->
        <IOModal label="Добавить место учебы">
          <template #header>
            <h2 class="header-1">Место учебы</h2>
            <p class="p-13-400 text-center">Выберите учебное заведение</p>
          </template>
          <IOSelect
            id="skill"
            placeholder="например, «University of Cambridge»"
            v-model="skill"
            :options="universities"
          ></IOSelect>
        </IOModal>
        <UserExperience @update:experiences="handleExperienceUpdate" />

        <h3 class="p-18-500">Ключевые навыки</h3>
        <IOModal label="Добавить навыки">
          <template #header>
            <h2 class="header-1">Ключевые навыки</h2>
            <p class="p-13-400 text-center">Выберите свои навыки</p>
          </template>
          <IOSelect
            id="skill"
            placeholder="Навык, например, «Java»"
            v-model="skill"
            :options="skills"
          ></IOSelect>
        </IOModal>

        <h3 class="p-18-500">Знание программ</h3>
        <IOModal label="Добавить программы">
          <template #header>
            <h2 class="header-1">Знание программ</h2>
            <p class="p-13-400 text-center">Выберите программы</p>
          </template>
          <IOSelect
            id="skill"
            placeholder="Программа, например, «Docker»"
            v-model="skill"
            :options="programs"
          ></IOSelect>
        </IOModal>

        <UserProfileAddFile
          :label="'Добавить дипломы'"
          :images="images"
          @update:images="updateImages"
        />

        <h3 class="p-18-500">Портфолио</h3>
        <IOModal label="Добавить файл">
          <template #header>
            <h2 class="header-1">Добавьте своё портфолио</h2>
          </template>
          <IOInputFile fileType="doc" />
        </IOModal>
      </div>
      <div class="user-profile__info-btn">
        <IOButton width="183" @click="saveExperiences">Сохранить</IOButton>
        <IOButton width="183" outlined @click="cancelChanges">Отменить изменения</IOButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'
import IOInputFile from '@/components/common/IOInputFile.vue'
import VerificationAccount from '@/components/pages/VerificationAccount.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOModal from '@/components/common/IOModal.vue'
import IOButton from '@/components/common/IOButton.vue'
import UserExperience from '@/views/user/UserExperience.vue'
import UserProfileAddFile from '@/views/user/UserProfileAddFile.vue'
import type { SelectPropsOptionI } from '@/types/componentsProps/commonProps'
import type { UserExperienceI } from '@/types/userProfile'

const selected = ref('personal')

const education = ref<number | string | null>(null)
const skill = ref<number | string | null>(null)
const images = ref<File[]>([])

const updateImages = (newImages: File[]) => {
  images.value = newImages

  console.log(newImages)
}

const universities = [
  { id: 1, value: 'harvard', label: 'Harvard University' },
  { id: 2, value: 'stanford', label: 'Stanford University' },
  { id: 3, value: 'mit', label: 'Massachusetts Institute of Technology (MIT)' },
  { id: 4, value: 'oxford', label: 'University of Oxford' },
  { id: 5, value: 'cambridge', label: 'University of Cambridge' }
]

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
  { id: 1, value: 'javascript', label: 'JavaScript' },
  { id: 2, value: 'python', label: 'Python' },
  { id: 3, value: 'java', label: 'Java' },
  { id: 4, value: 'html', label: 'HTML' },
  { id: 5, value: 'css', label: 'CSS' }
]
const programs = [
  { id: 1, value: 'visual_studio_code', label: 'Visual Studio Code' },
  { id: 2, value: 'intellij_idea', label: 'IntelliJ IDEA' },
  { id: 3, value: 'postman', label: 'Postman' },
  { id: 4, value: 'docker', label: 'Docker' },
  { id: 5, value: 'git', label: 'Git' }
]

const experiences = ref<UserExperienceI[]>([])

const handleExperienceUpdate = (updatedExperiences: UserExperienceI[]) => {
  experiences.value = updatedExperiences
  console.log('Обновленные данные об опыте работы:', updatedExperiences)
}

const saveExperiences = () => {
  console.log('Сохраненные данные об опыте работы:', experiences.value)
}

const cancelChanges = () => {
  experiences.value.forEach((experience) => {
    experience.company = ''
    experience.position = ''
    experience.startDate = null
    experience.endDate = null
    experience.isCurrent = false
  })
  experiences.value = []
  console.log('Изменения отменены')
}
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

    &-btn {
      display: flex;
      align-items: center;
      column-gap: 21px;
      margin-top: 50px;
    }
  }
}
</style>
