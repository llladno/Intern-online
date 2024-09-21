<template>
  <div class="main-container my-profile">
    <h2 class="my-profile__header header-1">Мой профиль</h2>
    <i-o-simple-select @selected-value="(slot) => (selected = slot)">
      <template #personal> Личный данные </template>
      <template #safty> Безопасность и вход </template>
    </i-o-simple-select>
    <div v-if="selected == 'personal'" class="my-profile__info">
      <div class="my-profile__form">
        <i-o-select
          :options="[
            {
              value: 'ooo',
              label: 'ООО'
            },
            {
              value: 'oao',
              label: 'ОАО'
            },
            {
              value: 'ip',
              label: 'ИП'
            }
          ]"
          placeholder="Выберите форму компании"
          label="Выберите форму компании"
        />
        <i-o-input v-model="v.profileData.name.$model" :error="v.profileData.name.$errors"> Название компании</i-o-input>
        <i-o-input v-model="profileData.phone_number"> Телефон компании</i-o-input>
        <i-o-input v-model="v.profileData.email.$model" :error="v.profileData.email.$errors"> Электронная почта компании</i-o-input>
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
          <icon-load-components />
        </div>
        <i-o-button>Загрузить</i-o-button>
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
        <i-o-input type="password"> Введите актуальный пароль </i-o-input>
        <i-o-input>Новый пароль</i-o-input>
        <i-o-button>Изменить</i-o-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSelect from '@/components/common/IOSelect.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import IconLoadComponents from '@/components/icons/IconLoadComponents.vue'
import type { OrganisationProfileUpdateI } from '@/types/account/organisation'
import { useVuelidate } from '@vuelidate/core'
import { useOrganisationStore } from '@/stores/organisation/OrganistaionStore'
import { defaultErrorMessage } from '@/helpers/vuelidateHelper'

const selected = ref('personal')
const organisationStore = useOrganisationStore()

const profileData = reactive<OrganisationProfileUpdateI>({
  organisation_form: 1,
  name: '',
  phone_number: '',
  email: '',
  address: '',
  website: '',
  describe: ''
})

const rules = computed(() => ({
  profileData: {
    name: defaultErrorMessage,
    email: defaultErrorMessage,
  }
}))

const v = useVuelidate(rules, { profileData })

onMounted(async () => {
  const data = await organisationStore.getOrganisationProfile()
  console.log(data)
})

function handleSave() {
  organisationStore.updateOrganisationProfile(profileData)
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
