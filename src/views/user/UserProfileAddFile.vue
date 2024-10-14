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
      @cansel="removeLastItem"
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
import { computed, ref } from 'vue'
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

const emitUpdatedFiles = () => {
  emit('update:files', selectedItems.value)
}
const fileValue = ref<File | null>(null)
const selectedItems = ref<File[]>([])
const imageUrls = ref<string[]>([])
const isShowFiles = ref<boolean>(false)

const rules = computed(() => ({
  fileValue: {
    required: helpers.withMessage('Выберите изображение или файл', required),
    maxFileSize: maxFileSize(5 * 1024 * 1024),
    isUnique: uniqueFileValidator(selectedItems.value)
  }
}))

const v = useVuelidate(rules, { fileValue })
const isButtonDisabled = computed(() => v.value.fileValue.$error)

const updateImageUrls = () => {
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

const editItems = () => {
  selectedItems.value = []
  imageUrls.value = []
  emitUpdatedFiles()
}

const removeLastItem = () => {
  if (selectedItems.value.length > 0) {
    selectedItems.value.pop()
    fileValue.value = null
    updateImageUrls()
    emitUpdatedFiles()
  }
}

// const saveItem = () => {
//     isShowFiles.value = true
//     console.log('Файл успешно сохранен.')
//     emitUpdatedFiles()
// }

const saveItem = () => {
  v.value.$validate()
  if (v.value.fileValue.$pending || v.value.fileValue.$invalid) {
    console.log('Валидация не пройдена, окно не закроется.')
    return
  } else {
    isShowFiles.value = true
    console.log('Файл успешно сохранен.')
    emitUpdatedFiles()
  }
}

// const handleFileChange = (file: File | null) => {
//   v.value.$touch()
//   if (v.value.fileValue.$pending || v.value.fileValue.$invalid ) return

//   if (file) {
//     const isUnique = !selectedItems.value.some(item => item.name === file.name && item.size === file.size);

//     if (isUnique) {
//       selectedItems.value.push(file)
//       updateImageUrls()
//       emitUpdatedFiles()
//     } else {
//       console.warn('Файл уже добавлен:', file.name)
//     }
//   }
// }
const handleFileChange = (file: File | null) => {
  v.value.$touch()
  if (v.value.fileValue.$pending || v.value.fileValue.$invalid) return

  if (file) {
    const isUnique = !selectedItems.value.some(
      (item) => item.name === file.name && item.size === file.size
    )

    if (isUnique) {
      selectedItems.value.push(file)
      updateImageUrls()
      emitUpdatedFiles()
      v.value.fileValue.$reset()
    } else {
      // console.warn('Файл уже добавлен:', file.name)

      alert(`Файл "${file.name}" уже добавлен.`)
    }
  }
}
</script>

<style scoped lang="scss"></style>
