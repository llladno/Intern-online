<template>
  <div class="main-container user-profile">
    <h2 class="user-profile__header header-1">Мой профиль</h2>
    <IOSimpleSelect @selectedValue="(slot) => (selected = slot)">
      <template #personal>Личный данные</template>
      <template #safty>Безопасность и вход</template>
    </IOSimpleSelect>
    <form class="user-profile__info" v-if="selected == 'personal'">
      <VerificationAccount />
      <div class="user-profile__info-form">
        <IOInput v-model="v.user.lastName.$model" :error="v.user.lastName.$errors">Фамилия</IOInput>
        <IOInput v-model="v.user.firstName.$model" :error="v.user.firstName.$errors">Имя</IOInput>
        <IOInput v-model="user.middleName">Отчество</IOInput>
        <IOInputDate v-model="user.date" />
        <IOInput v-model="v.user.website.$model" :error="v.user.website.$errors"
          >Ваш веб-сайт
        </IOInput>
        <IOInput
          v-model="v.user.aboutUser.$model"
          :error="v.user.aboutUser.$errors"
          placeholder="Опишите наиболее подробно свои навыки/достижения"
          big
        >
          О себе
        </IOInput>
      </div>
      <div class="user-profile__info-education">
        <h3 class="p-18-500">Образование</h3>
        <!-- <IOSelect
          id="education"
          placeholder="Выберите уровень образования"
          :options="educationLevels"
          v-model="user.education"
          >Уровень образования</IOSelect
        > -->
        <IOCustomSelect
          id="education"
          placeholder="Выберите уровень образования"
          :options="educationLevels"
          v-model="user.education"
          isLabel
          label="Уровень образования"
        ></IOCustomSelect>
        <!-- <p>value: {{ education }}</p> -->
        <IOModal label="Добавить место учебы">
          <template #header>
            <h2 class="header-1">Место учебы</h2>
            <p class="p-13-400 text-center">Выберите учебное заведение</p>
          </template>
          <IOSelect
            id="skill"
            placeholder="например, «University of Cambridge»"
            v-model="user.university"
            :options="universities"
          ></IOSelect>
        </IOModal>
        <UserExperience
          :experiences="user.experiences"
          @update:experiences="handleExperienceUpdate"
        />

        <h3 class="p-18-500">Ключевые навыки</h3>
        <IOModal label="Добавить навыки">
          <template #header>
            <h2 class="header-1">Ключевые навыки</h2>
            <p class="p-13-400 text-center">Выберите свои навыки</p>
          </template>
          <IOSelect
            id="skill"
            placeholder="Навык, например, «Java»"
            v-model="user.skill"
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
            v-model="user.program"
            :options="programs"
          ></IOSelect>
        </IOModal>

        <UserProfileAddFile
          label="Дипломы"
          modalLabel="Добавить фотографии"
          modalTitle="Дипломы"
          :files="user.images"
          :fileType="'img'"
          @update:files="updateImages"
        />

        <UserProfileAddFile
          label="Портфолио"
          modalLabel="Добавить файл"
          modalTitle="Портфолио"
          :files="user.documents"
          :fileType="'doc'"
          @update:files="updateDocuments"
        />
      </div>
      <div class="user-profile__info-btn">
        <IOButton width="183" type="submit">Сохранить</IOButton>
        <IOButton width="183" outlined @click="cancelChanges">Отменить изменения</IOButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// import axios from 'axios'
import { reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'
import VerificationAccount from '@/components/pages/VerificationAccount.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOModal from '@/components/common/IOModal.vue'
import IOButton from '@/components/common/IOButton.vue'
import UserExperience from '@/views/user/UserExperience.vue'
import UserProfileAddFile from '@/views/user/UserProfileAddFile.vue'
import IOCustomSelect from '@/components/common/IOCustomSelect.vue'
import type { UserTempalateI } from '@/types/userProfile'
import type { UserExperienceI } from '@/types/userProfile'
import type { UserI } from '@/types/userProfile'
import { urlValidator } from '@/ts/validators'

const selected = ref('personal')
const images = ref<File[]>([])
const documents = ref<File[]>([])
const experiences = ref<UserExperienceI[]>([])

const user = reactive<UserI>({
  lastName: '',
  firstName: '',
  middleName: '',
  date: '',
  website: '',
  aboutUser: '',
  education: '',
  university: '',
  experiences: [],
  skill: '',
  program: '',
  images: [],
  documents: []
})

const updateImages = (newImages: File[]) => (images.value = newImages)
const updateDocuments = (newDocs: File[]) => (documents.value = newDocs)
const handleExperienceUpdate = (updatedExperiences: UserExperienceI[]) =>
  (experiences.value = updatedExperiences)

const universities: UserTempalateI[] = [
  { id: 1, value: 'harvard', label: 'Harvard University' },
  { id: 2, value: 'stanford', label: 'Stanford University' },
  { id: 3, value: 'mit', label: 'Massachusetts Institute of Technology (MIT)' },
  { id: 4, value: 'oxford', label: 'University of Oxford' },
  { id: 5, value: 'cambridge', label: 'University of Cambridge' }
]

const educationLevels: UserTempalateI[] = [
  { id: 1, value: 'none', label: 'Без образования' },
  { id: 2, value: 'primary', label: 'Начальное образование' },
  { id: 3, value: 'basic_secondary', label: 'Основное общее образование' },
  { id: 4, value: 'secondary', label: 'Среднее общее образование' },
  { id: 5, value: 'secondary_professional', label: 'Среднее профессиональное образование' },
  { id: 6, value: 'higher', label: 'Высшее образование' },
  { id: 7, value: 'postgraduate', label: 'Послевузовское образование' },
  { id: 8, value: 'doctoral', label: 'Доктор наук' },
  { id: 1, value: 'none', label: 'Без образования' },
  { id: 2, value: 'primary', label: 'Начальное образование' },
  { id: 3, value: 'basic_secondary', label: 'Основное общее образование' },
  { id: 4, value: 'secondary', label: 'Среднее общее образование' },
  { id: 5, value: 'secondary_professional', label: 'Среднее профессиональное образование' },
  { id: 6, value: 'higher', label: 'Высшее образование' },
  { id: 7, value: 'postgraduate', label: 'Послевузовское образование' },
  { id: 8, value: 'doctoral', label: 'Доктор наук' },
  { id: 1, value: 'none', label: 'Без образования' },
  { id: 2, value: 'primary', label: 'Начальное образование' },
  { id: 3, value: 'basic_secondary', label: 'Основное общее образование' },
  { id: 4, value: 'secondary', label: 'Среднее общее образование' },
  { id: 5, value: 'secondary_professional', label: 'Среднее профессиональное образование' },
  { id: 6, value: 'higher', label: 'Высшее образование' },
  { id: 7, value: 'postgraduate', label: 'Послевузовское образование' },
  { id: 8, value: 'doctoral', label: 'Доктор наук' }
]
const skills: UserTempalateI[] = [
  { id: 1, value: 'javascript', label: 'JavaScript' },
  { id: 2, value: 'python', label: 'Python' },
  { id: 3, value: 'java', label: 'Java' },
  { id: 4, value: 'html', label: 'HTML' },
  { id: 5, value: 'css', label: 'CSS' }
]
const programs: UserTempalateI[] = [
  { id: 1, value: 'visual_studio_code', label: 'Visual Studio Code' },
  { id: 2, value: 'intellij_idea', label: 'IntelliJ IDEA' },
  { id: 3, value: 'postman', label: 'Postman' },
  { id: 4, value: 'docker', label: 'Docker' },
  { id: 5, value: 'git', label: 'Git' }
]

// const saveExperiences = () => {
//   console.log('Сохраненные данные об опыте работы:', experiences.value)
// }

// const cancelChanges = () => {
//   experiences.value.forEach((experience) => {
//     experience.company = ''
//     experience.position = ''
//     experience.startDate = null
//     experience.endDate = null
//     experience.isCurrent = false
//   })
//   experiences.value = []
//   console.log('Изменения отменены')
// }

// const saveUserProfile = async () => {
//   try {
//     const response = await axios.post('аааа', user)
//     if (response.status === 200) {
//       console.log('Данные успешно отправлены:', response.data)
//       clearForm()
//     } else {
//       console.error('Неожиданный статус:', response.status)
//     }
//   } catch (error) {
//     console.error('Ошибка при отправке данных:', error)
//   }
// }

const clearForm = () => {
  user.lastName = ''
  user.firstName = ''
  user.middleName = ''
  user.date = ''
  user.website = ''
  user.aboutUser = ''
  user.education = ''
  user.university = ''
  user.experiences = []
  user.skill = ''
  user.program = ''
  user.images = []
  user.documents = []
}
const cancelChanges = () => {
  clearForm()
}

const rules = computed(() => ({
  user: {
    lastName: {
      required: helpers.withMessage('Поле Фамилия обязательно', required)
    },
    firstName: {
      required: helpers.withMessage('Поле Имя обязательно', required)
    },
    website: {
      url: helpers.withMessage(
        'Поле содержит название сайта, например: https://dzen.ru',
        urlValidator
      )
    },
    aboutUser: {
      minLength: helpers.withMessage(
        (value) => `Введите минимум ${value.$params.min} символов`,
        minLength(20)
      ),
      maxLength: helpers.withMessage(
        (value) => `Введено много символов, максимальное значение ${value.$params.max}`,
        maxLength(50)
      )
    }
  }
}))

const v = useVuelidate(rules, { user })
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__info {
    width: 388px;
    height: auto;

    &-form {
      display: flex;
      flex-direction: column;
      gap: 25px;
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
