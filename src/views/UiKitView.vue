<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/shadcn/ui/select'

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
import IOButton from '@/components/common/IOButton.vue'
import IOInput from '@/components/common/IOInput.vue'
import IOSimpleSelect from '@/components/common/IOSimpleSelect.vue'
import { useUserStore } from '@/stores/UserStore'

const userStore = useUserStore()

function testRequest() {
  console.log(userStore.getTestUserList())
}
</script>

<template>
  <div class="ui-kit">
    <IOButton @click="$router.push('/')">Назад</IOButton>
    <h1>Ui Kit</h1>
    <div class="ui-kit__content">
      <div class="ui-kit__section">
        <h2>shadcn/ui</h2>
        <div class="ui-kit__variation">
          <p>Селект</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Выберите вид пользователя" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Выберите вид пользователя</SelectLabel>
                <SelectItem value="default">Обычный</SelectItem>
                <SelectItem value="organisation">Организация</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div class="ui-kit__variation">
          <p>Диалоговое окно</p>
          <AlertDialog>
            <AlertDialogTrigger>
              <IOButton>Open</IOButton>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div class="ui-kit__section ui-kit__section--right">
        <h2>Наши кастомные</h2>
        <div class="ui-kit__variation">
          <p>Кнопка обычная</p>
          <div class="ui-kit__variation-element">
            <IOButton @click="testRequest">Запрос</IOButton>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Кнопка outline</p>
          <div class="ui-kit__variation-element">
            <IOButton outlined>Кнопка</IOButton>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Инпут c label</p>
          <div class="ui-kit__variation-element">
            <IOInput>Email</IOInput>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Обычный инпут</p>
          <div class="ui-kit__variation-element">
            <IOInput></IOInput>
          </div>
        </div>
        <div class="ui-kit__variation">
          <p>Tabs</p>
          <div class="ui-kit__variation-element">
            <IOSimpleSelect>
              <template #active>Активные</template>
              <template #draft>Черновики</template>
              <template #archive>Архив</template>
            </IOSimpleSelect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/base/variables';

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
