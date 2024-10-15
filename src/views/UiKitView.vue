<script setup lang="ts">
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOPopup from '@/components/common/IOPopup.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/shadcn/ui/alert-dialog'
import {
  SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'
import { useUserStore } from '@/stores/UserStore'
import { usePopupStore } from '@/stores/PopupStore'

const userStore = useUserStore()
const popupStore = usePopupStore()

const testRequest = () => {
  userStore.getTestUserList().then(() => {
    popupStore.$patch({
      isPopup: { status: true, text: 'Тестовые пользователи добавлены', type: 'success' }
    })
  })
}
</script>

<template>
  <div class="ui-kit">
    <i-o-popup type="error"> Ошибка </i-o-popup>
    <i-o-button @click="$router.push('/')"> Назад </i-o-button>
    <h1>Ui Kit</h1>
    <div class="ui-kit__content">
      <div class="ui-kit__section">
        <h2>shadcn/ui</h2>
        <div class="ui-kit__variation">
          <p>Селект</p>
          <div>
            <select-component>
              <select-trigger>
                <select-value placeholder="Выберите вид пользователя" />
              </select-trigger>
              <select-content>
                <select-group>
                  <select-label>Выберите вид пользователя</select-label>
                  <select-item value="default"> Обычный </select-item>
                  <select-item value="organisation"> Организация </select-item>
                </select-group>
              </select-content>
            </select-component>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Диалоговое окно</p>
          <alert-dialog>
            <alert-dialog-trigger>
              <i-o-button>Open</i-o-button>
            </alert-dialog-trigger>
            <alert-dialog-content>
              <alert-dialog-header>
                <alert-dialog-title>Are you absolutely sure?</alert-dialog-title>
                <alert-dialog-description>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </alert-dialog-description>
              </alert-dialog-header>
              <alert-dialog-footer>
                <alert-dialog-cancel>Cancel</alert-dialog-cancel>
                <alert-dialog-action>Continue</alert-dialog-action>
              </alert-dialog-footer>
            </alert-dialog-content>
          </alert-dialog>
        </div>
      </div>
      <div class="ui-kit__section ui-kit__section--right">
        <h2>Наши кастомные</h2>
        <div class="ui-kit__variation">
          <p>Кнопка обычная</p>
          <div class="ui-kit__variation-element">
            <i-o-button @click="testRequest"> Запрос </i-o-button>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Кнопка outline</p>
          <div class="ui-kit__variation-element">
            <i-o-button outlined> Кнопка </i-o-button>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Инпут c label</p>
          <div class="ui-kit__variation-element">
            <i-o-input>Email</i-o-input>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Обычный инпут</p>
          <div class="ui-kit__variation-element">
            <i-o-input />
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Tabs</p>
          <div class="ui-kit__variation-element">
            <i-o-simple-select>
              <template #active> Активные </template>
              <template #draft> Черновики </template>
              <template #archive> Архив </template>
            </i-o-simple-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-kit {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 40px;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  button {
    width: fit-content;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    border: 1px solid $default-grey;
    border-radius: 10px;
    padding: 20px;
  }

  &__variation {
    display: grid;
    gap: 15px;
    align-items: center;
    grid-template-columns: 200px 350px;
  }
}
</style>
