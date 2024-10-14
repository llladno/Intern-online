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
        <IOCustomSelect
          id="education"
          placeholder="Выберите уровень образования"
          :options="educationLevels"
          v-model="user.education"
          isLabel
          label="Уровень образования"
        ></IOCustomSelect>
        <div>
          <IOModalWithSelect
            :label="buttonProperties.university.label"
            :buttonBackground="buttonProperties.university.background"
            :buttonIcon="buttonProperties.university.icon"
            :isVisible="isModalVisibleUnversity"
            @update:isVisible="isModalVisibleUnversity = $event"
            @save="isModalVisibleUnversity = false"
            @cansel="handleCanselUniversity"
            @opened="markModalAsOpened('university')"
          >
            <template #header>
              <h2 class="header-1">Место учебы</h2>
              <p class="p-13-400 text-center">Выберите учебное заведение</p>
            </template>
            <IOCustomSelect
              id="university"
              placeholder="например, «University of Cambridge»"
              v-model="user.university"
              :options="universities"
              @update:modelValue="updateUniversity"
            />
          </IOModalWithSelect>
          <div v-if="user.university" class="flex flex-col gap-y-2 mt-3">
            <span class="p-14-500"
              >Выбранное учебное заведение:
              {{ selectedOptionLabel(universities, user.university) }}</span
            >
          </div>
        </div>

        <UserExperience
          :experiences="user.experiences"
          @update:experiences="handleExperienceUpdate"
        />
        <div>
          <h3 class="p-18-500">Ключевые навыки</h3>
          <IOModalWithSelect
            :label="buttonProperties.skill.label"
            :buttonBackground="buttonProperties.skill.background"
            :buttonIcon="buttonProperties.skill.icon"
            :isVisible="isModalVisibleSkill"
            @update:isVisible="isModalVisibleSkill = $event"
            @save="isModalVisibleSkill = false"
            @cansel="handleCanselSkill"
            @opened="markModalAsOpened('skill')"
          >
            <template #header>
              <h2 class="header-1">Ключевые навыки</h2>
              <p class="p-13-400 text-center">Выберите свои навыки</p>
            </template>
            <IOCustomSelect
              id="skill"
              placeholder="Навык, например, «Java»"
              v-model="user.skill"
              :options="skills"
              @update:modelValue="updateSkill"
            ></IOCustomSelect>
          </IOModalWithSelect>
          <div v-if="user.skill" class="flex flex-col gap-y-2 mt-3">
            <span class="p-14-500"
              >Выбран навык: {{ selectedOptionLabel(skills, user.skill) }}</span
            >
          </div>
        </div>

        <div>
          <h3 class="p-18-500">Знание программ</h3>
          <IOModalWithSelect
            :label="buttonProperties.program.label"
            :buttonBackground="buttonProperties.program.background"
            :buttonIcon="buttonProperties.program.icon"
            :isVisible="isModalVisiblePropgram"
            @update:isVisible="isModalVisiblePropgram = $event"
            @save="isModalVisiblePropgram = false"
            @cansel="handleCanselProgram"
            @opened="markModalAsOpened('program')"
          >
            <template #header>
              <h2 class="header-1">Знание программ</h2>
              <p class="p-13-400 text-center">Выберите программы</p>
            </template>
            <IOCustomSelect
              id="program"
              placeholder="Программа, например, «Docker»"
              v-model="user.program"
              :options="programs"
              @update:modelValue="updateProgram"
            ></IOCustomSelect>
          </IOModalWithSelect>
          <div v-if="user.program" class="flex flex-col gap-y-2 mt-3">
            <span class="p-14-500"
              >Выбрана программа: {{ selectedOptionLabel(programs, user.program) }}</span
            >
          </div>
        </div>

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
import { reactive, ref, computed, type Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength, maxLength } from '@vuelidate/validators'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOInputDate from '@/components/common/IOInputDate.vue'
import VerificationAccount from '@/components/pages/VerificationAccount.vue'
import IOModalWithSelect from '@/components/common/IOModalWithSelect.vue'
import IOButton from '@/components/common/IOButton.vue'
import UserExperience from '@/views/user/UserExperience.vue'
import UserProfileAddFile from '@/views/user/UserProfileAddFile.vue'
import IOCustomSelect from '@/components/common/IOCustomSelect.vue'
import type { UserTempalateI } from '@/types/userProfile'
import type { UserExperienceI } from '@/types/userProfile'
import type { UserI } from '@/types/userProfile'
import { urlValidator } from '@/ts/validators'

interface ModalState {
  university: Ref<boolean>
  skill: Ref<boolean>
  program: Ref<boolean>
}

const selected = ref('personal')
const images = ref<File[]>([])
const documents = ref<File[]>([])
const experiences = ref<UserExperienceI[]>([])
const isModalVisibleUnversity = ref<boolean>(false)
const isModalVisibleSkill = ref<boolean>(false)
const isModalVisiblePropgram = ref<boolean>(false)

const hasModalBeenOpened: ModalState = {
  university: ref(false),
  skill: ref(false),
  program: ref(false)
}
const markModalAsOpened = (modal: keyof ModalState): void => {
  hasModalBeenOpened[modal].value = true
}
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
const setUserProperty = (key: keyof UserI, value: any) => {
  if (key === 'experiences' || key === 'images' || key === 'documents') {
    if (Array.isArray(value)) {
      user[key] = value
    }
    return
  }
  if (typeof value === 'string' || typeof value === 'number') {
    user[key] = value.toString()
    return
  }
}
const updateUniversity = (value: string | number) => setUserProperty('university', value)
const updateSkill = (value: string | number) => setUserProperty('skill', value)
const updateProgram = (value: string | number) => setUserProperty('program', value)

const selectedOptionLabel = (options: UserTempalateI[], value: string | number) => {
  return computed(() => {
    const selected = options.find((option) => option.value === value)
    return selected ? selected.label : 'Не выбрано'
  })
}

const handleCanselSkill = () => {
  user.skill = ''
  isModalVisibleSkill.value = false
}
const handleCanselUniversity = () => {
  user.university = ''
  isModalVisibleUnversity.value = false
}
const handleCanselProgram = () => {
  user.program = ''
  isModalVisiblePropgram.value = false
}

const getButtonProperties = (
  modal: keyof ModalState,
  defaultLabel: string
): { label: string; background: string; icon: boolean } => {
  return {
    label: hasModalBeenOpened[modal].value ? 'Изменить' : defaultLabel,
    background: hasModalBeenOpened[modal].value ? '' : 'white',
    icon: !hasModalBeenOpened[modal].value
  }
}
const buttonProperties = computed(() => {
  return {
    university: getButtonProperties('university', 'Добавить место учебы'),
    skill: getButtonProperties('skill', 'Добавить навыки'),
    program: getButtonProperties('program', 'Добавить программы')
  }
})

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
