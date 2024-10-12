<template>
  <div class="main-container my-profile">
    <h2 class="my-profile__header header-1">Мой профиль</h2>
    <i-o-simple-select @selected-value="(slot) => (selected = slot)">
      <template #personal> Личный данные </template>
      <template #safty> Безопасность и вход </template>
    </i-o-simple-select>
    <div v-if="selected == 'personal'" class="my-profile__info">
      <div class="my-profile__form" v-if="profileData && organisationForm">
        <i-o-select
          :options="organisationForms"
          :model-value="profileData.organization_form"
          :placeholder="organisationForm.label"
          label="Выберите форму компании"
        />
        <i-o-input v-model="v.profileData.name.$model" :error="v.profileData.name.$errors">
          Название компании *</i-o-input
        >
        <i-o-input v-model="v.profileData.inn.$model" :error="v.profileData.inn.$errors"
          >ИНН компании *</i-o-input
        >
        <i-o-input v-model="profileData.phone_number"> Телефон компании</i-o-input>
        <i-o-input v-model="v.profileData.email.$model" :error="v.profileData.email.$errors">
          Электронная почта для связи с компанией *</i-o-input
        >
        <i-o-input v-model="profileData.website"> Веб-сайт компании</i-o-input>
        <i-o-input v-model="profileData.address"> Адрес компании</i-o-input>
        <i-o-input v-model="profileData.describe" big> Описание </i-o-input>
        <div class="my-profile__buttons">
          <i-o-button @click="handleSave">Сохранить</i-o-button>
          <i-o-button outlined> Отменить </i-o-button>
        </div>
      </div>
      <div class="my-profile__image">
        <div class="my-profile__image-place">
          <icon-load-components v-if="!file" />
          <img v-if="!filePath" ref="profileImageRef" />
          <img :src="filePath" />
          <i-o-input class="my-profile__set-file" type="file" @change="setFile" height></i-o-input>
          <div class="my-profile__set-button" />
        </div>
        <i-o-button @click="saveFile">Загрузить</i-o-button>
      </div>
    </div>
    <div v-else class="my-profile__safty">
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Изменение номера телефона</h2>
        <i-o-input>Номер телефона</i-o-input>
        <i-o-button>Изменить</i-o-button>
      </div>
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Почта</h2>
        <i-o-input placeholder="Укажите вашу почту"> E-mail </i-o-input>
        <i-o-button>Сохранить</i-o-button>
      </div>
      <div class="my-profile__safty-form">
        <h2 class="p-28-500">Изменение пароля</h2>
        <i-o-input type="password" v-model="changePassword.old_password">
          Введите актуальный пароль
        </i-o-input>
        <i-o-input v-model="changePassword.password">Новый пароль</i-o-input>
        <i-o-button @click="handleChangePassword">Изменить</i-o-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IconLoadComponents from '@/components/icons/IconLoadComponents.vue'
import type { OrganisationProfileUpdateI } from '@/types/organisation'
import { useVuelidate } from '@vuelidate/core'
import { useOrganisationStore } from '@/stores/OrganistaionStore'
import { defaultErrorMessage, emailCheckMessage } from '@/helpers/vuelidateHelper'
import { useDataStore } from '@/stores/DataStore'
import type { OrganisationFormI } from '@/types/data'
import type { ResetPasswordI } from '@/types/auth'
import { getTokenId } from '@/helpers/token'
import { useNoticeStore } from '@/stores/NotificationStore'

const organisationStore = useOrganisationStore()
const noticeStore = useNoticeStore()

const selected = ref<string>('personal')
const profileData = ref<OrganisationProfileUpdateI>()
const organisationForms = ref<OrganisationFormI[]>([])
const organisationForm = ref<OrganisationFormI>()
const file = ref<File | null>()
const filePath = ref<string>('')
const profileImageRef = ref<string>('')
const userId: number | undefined = getTokenId()
const changePassword = ref<Omit<ResetPasswordI, 'password2'>>({
  old_password: '',
  password: ''
})

const rules = computed(() => ({
  profileData: {
    name: defaultErrorMessage,
    email: emailCheckMessage,
    inn: defaultErrorMessage
  }
}))

const v = useVuelidate(rules, { profileData })

onMounted(async () => {
  organisationForms.value = await useDataStore().organisationForm()
  if (!organisationStore.organisationProfile) await organisationStore.getOrganisationProfile()

  profileData.value = organisationStore.organisationProfile
  organisationForm.value = organisationForms.value.find(
    (form) => form.value == profileData.value?.organization_form
  )
  const tempPath = await useDataStore().getFile()
  filePath.value = tempPath[tempPath.length - 1].label
})

const setFile = async (event): Promise<void> => {
  file.value = event.target?.files[0]
  const reader = new FileReader()
  profileImageRef.value.src = await reader.readAsDataURL(file.value)
}

const handleSave = (): void => {
  //   //TODO: исправить
  // if (profileData.value && profileData.value.id) organisationStore.updateOrganisationProfile({ ...profileData.value, logo: null })
}

const saveFile = async (): Promise<void> => {
  if (userId && file.value)
    organisationStore.loadProfileFile({ file: file.value, account: userId }).then(async () => {
      noticeStore.noticeShow('Фото загружено', 'success')
      const tempPath = await useDataStore().getFile()
      filePath.value = tempPath[tempPath.length - 1].label
    })
}

const handleChangePassword = (): void => {
  if (userId) {
    organisationStore
      .changePassword(
        {
          old_password: changePassword.value.old_password,
          password: changePassword.value.password,
          password2: changePassword.value.password
        },
        userId
      )
      .then(() => {
        noticeStore.noticeShow('Ваш пароль был изменен', 'success')
      })
      .catch(() => {
        noticeStore.noticeShow('Неверный пароль', 'error')
      })
  }
}
</script>

<style scoped lang="scss">
.my-profile {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__info {
    display: flex;
    gap: 116px;
  }

  &__set-file {
    position: absolute;
    height: 100%;
  }

  &__set-button {
    position: absolute;
    transform: translateY(20%);
    width: 50px;
    height: 50px;
    background: #69696c;
    border-radius: 50%;
    z-index: 1;
    opacity: 0;
    transition: 0.3s ease;
  }

  &__image {
    position: relative;
    width: 257px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 255px;

    &-place {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 257px;
      height: 257px;
      background: #f6f6f6;
      border: 1.5px dashed #e4e4e7;
      border-radius: 6px;
      transition: 0.3s ease;

      &:hover {
        filter: blur(1px) grayscale(30%);
        .my-profile__set-button {
          opacity: 1;
        }
      }
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
