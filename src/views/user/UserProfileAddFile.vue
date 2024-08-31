<template>
  <div class="add-file">
    <h3 class="p-18-500">{{ label }}</h3>
    <UserSelectedImages
      v-if="showImages"
      :selectedItems="selectedItems"
      :imageUrls="imageUrls"
      @edit-items="editItems"
    />
    <IOModal label="Добавить фотографии" @save="saveItem" @cansel="removeLastItem">
      <template #header>
        <h2 class="header-1">Дипломы</h2>
        <p class="p-13-400 text-center">Выберите файл диплома</p>
      </template>
      <IOInputFile
        fileType="img"
        v-model="fileValue"
        @update:modelValue="handleFileChange"
        :error="v.fileValue.$errors"
      />
    </IOModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { maxFileSize } from '@/ts/validators'
import IOModal from '@/components/common/IOModal.vue'
import IOInputFile from '@/components/common/IOInputFile.vue'
import UserSelectedImages from '@/views/user/UserSelectedImages.vue'

const props = defineProps<{
  label: string
  images: File[]
}>()

const emit = defineEmits<{
  (e: 'update:images', images: File[]): void
}>()

const fileValue = ref<File | null>(null)
const selectedItems = ref<File[]>(props.images)
const imageUrls = ref<string[]>([])
const showImages = ref<boolean>(false)

const rules = computed(() => ({
  fileValue: {
    required: helpers.withMessage('Выберите изображение', required),
    maxFileSize: maxFileSize(5 * 1024 * 1024)
  }
}))

const emitUpdatedImages = () => {
  emit('update:images', selectedItems.value)
}
const v = useVuelidate(rules, { fileValue })

const handleFileChange = (file: File | null) => {
  v.value.$validate()

  if (v.value.fileValue.$pending || v.value.fileValue.$invalid) {
    return
  }

  if (file) {
    selectedItems.value.push(file)
    updateImageUrls()
    emitUpdatedImages()
  }
}

const updateImageUrls = () => {
  imageUrls.value = selectedItems.value
    .map((item) => {
      if (item instanceof File) {
        return URL.createObjectURL(item)
      } else {
        console.warn('Invalid item for URL creation:', item)
        return null
      }
    })
    .filter((url) => url !== null) as string[]
}

const editItems = () => {
  selectedItems.value = []
  imageUrls.value = []
  emitUpdatedImages()
}

const removeLastItem = () => {
  if (selectedItems.value.length > 0) {
    selectedItems.value.pop()
    fileValue.value = null
    updateImageUrls()
    emitUpdatedImages()
  }
}
const saveItem = () => {
  v.value.$validate()

  if (v.value.fileValue.$pending || v.value.fileValue.$invalid) {
    console.log('Валидация не пройдена, окно не закроется.')
    return
  } else {
    showImages.value = true
    console.log('Файл успешно сохранен.')
    emitUpdatedImages()
  }
}
</script>

<style scoped lang="scss"></style>
