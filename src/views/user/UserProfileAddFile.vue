<template>
  <div class="add-file">
    <h3 class="p-18-500">{{ label }}</h3>
    <UserSelectedImages
      v-if="showImages"
      :selectedItems="selectedItems"
      :imageUrls="imageUrls"
      @edit-items="editItems"
    />
    <IOModal label="Добавить фотографии" @save="showImages = true">
      <template #header>
        <h2 class="header-1">Дипломы</h2>
        <p class="p-13-400 text-center">Выберите файл диплома</p>
      </template>
      <IOInputFile v-model="fileValue" @update:modelValue="handleFileChange" />
    </IOModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOModal from '@/components/common/IOModal.vue'
import IOInputFile from '@/components/common/IOInputFile.vue'
import UserSelectedImages from '@/views/user/UserSelectedImages.vue'

defineProps<{
  label: string
}>()

const fileValue = ref<File | null>(null)
const selectedItems = ref<File[]>([])
const imageUrls = ref<string[]>([])
const showImages = ref<boolean>(false)

const handleFileChange = (file: File | null) => {
  if (file) {
    selectedItems.value.push(file)
    updateImageUrls()
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
}
</script>

<style scoped lang="scss"></style>
