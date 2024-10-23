<template>
  <div class="add-file">
    <h3 class="p-18-500">{{ label }}</h3>
    <UserSelectedImages
      v-if="isShowFiles"
      :selectedItems="selectedItems"
      :imageUrls="imageUrls"
      @edit-items="editItems"
    />
    <IOModalDefault
      :label="modalLabel"
      @save="saveItem"
      @cancel="removeLastItem"
      :disabled="isButtonDisabled"
    >
      <template #header>
        <h2 class="header-1">{{ modalTitle }}</h2>
        <p class="p-13-400 text-center">Выберите файл диплома</p>
      </template>
      <IOInputFile
        :fileType="fileType"
        v-model="fileValue"
        @update:modelValue="handleFileChange"
        :error="v.fileValue.$errors"
      />
    </IOModalDefault>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { maxFileSize, uniqueFileValidator } from '@/ts/validators'
import IOModalDefault from '@/components/common/IOModalDefault.vue'
import IOInputFile from '@/components/common/IOInputFile.vue'
import UserSelectedImages from '@/views/user/UserSelectedImages.vue'
import type { UserFileUploadI } from '@/types/userProfile'

defineProps<UserFileUploadI>()

const emit = defineEmits<{
  (e: 'update:files', files: File[]): void
}>()

const emitUpdatedFiles = (): void => {
  emit('update:files', selectedItems.value)
}
const fileValue = ref<File | null>(null)
const selectedItems = ref<File[]>([])
const imageUrls = ref<string[]>([])
const isShowFiles = ref<boolean>(false)

const rules: ComputedRef<{
  fileValue: {
    required: any
    maxFileSize: any
    isUnique: any
  }
}> = computed(() => ({
  fileValue: {
    required: helpers.withMessage('Выберите изображение или файл', required),
    maxFileSize: helpers.withMessage(
      `Размер файла не должен превышать ${5} МБ.`,
      maxFileSize(5 * 1024 * 1024)
    ),
    isUnique: helpers.withMessage(
      `Файл c таким именем и размером уже выбран`,
      uniqueFileValidator(selectedItems.value)
    )
  }
}))

const v = useVuelidate(rules, { fileValue })
const isButtonDisabled: ComputedRef<boolean> = computed(() => v.value.fileValue.$error)

const updateImageUrls = (): void => {
  if (selectedItems.value.length === 0) {
    imageUrls.value = []
  }

  imageUrls.value = selectedItems.value
    .map((item) => {
      if (item instanceof File) {
        return URL.createObjectURL(item)
      } else {
        return null
      }
    })
    .filter((url) => url !== null) as string[]
}

const editItems = (): void => {
  selectedItems.value = []
  imageUrls.value = []
  emitUpdatedFiles()
}

const removeLastItem = (): void => {
  if (selectedItems.value.length > 0) {
    selectedItems.value.pop()
    fileValue.value = null
    updateImageUrls()
    emitUpdatedFiles()
  }
}

const saveItem = (): void => {
  isShowFiles.value = true
  emitUpdatedFiles()
}

const handleFileChange = (file: File | null): void => {
  v.value.$touch()
  if (v.value.fileValue.$pending || v.value.fileValue.$invalid) return
  if (file) {
    selectedItems.value.push(file)
    updateImageUrls()
    emitUpdatedFiles()
  }
  v.value.fileValue.$reset()
}
</script>

<style scoped lang="scss"></style>
