<template>
  <div class="selected-images">
    <div class="selected-images__block" v-for="(item, i) in selectedItems" :key="i">
      <template v-if="isFileType(item)">
        <div v-if="isImage(item)" class="selected-images__block-img">
          <img :src="imageUrls[i]" alt="Uploaded Image" />
        </div>
        <div v-else class="selected-images__block-doc">
          <img :src="getPlaceholderImage(item)" alt="Uploaded File" />
        </div>
        <div class="selected-images__block-name">
          {{ selectedItemNames(item) }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedItems: File[]
  imageUrls: string[]
}>()
const isFileType = (item: any): item is File => item instanceof File
const isImage = (item: File): boolean => item.type.startsWith('image/')

const getPlaceholderImage = (item: File): string => {
  if (item.type.startsWith('application/pdf')) {
    return 'src/assets/media/img/docs/pdf.png'
  } else if (item.type.startsWith('application/msword')) {
    return 'src/assets/media/img/docs/word.png'
  } else if (
    item.type.startsWith('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  ) {
    return 'src/assets/media/img/docs/docx.png'
  } else if (item.type === 'application/vnd.google-apps.document') {
    return 'src/assets/media/img/docs/google docs.png'
  } else if (
    item.type.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  ) {
    return 'src/assets/media/img/docs/exel.png'
  }
  return ''
}

const selectedItemNames = (item: File): string => {
  const trimmedName = item.name.length > 15 ? item.name.slice(0, 10) + '...' : item.name

  let fileType = ''
  if (item.name.endsWith('.docx')) {
    fileType = '.docx'
  } else if (item.name.endsWith('.pdf')) {
    fileType = '.pdf'
  } else if (item.type === 'application/vnd.google-apps.document') {
    fileType = 'Google Docs'
  } else {
    fileType = item.type.replace('image/', '')
    return `${trimmedName}/${fileType}`
  }

  return `${trimmedName}${fileType}`
}
</script>

<style scoped lang="scss">
.selected-images {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  margin: 10px 0;
  width: 470px;

  &__block {
    display: flex;
    flex-direction: column;
    max-width: 150px;
    min-width: 150px;

    &-img {
      max-width: 100%;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-doc {
      max-width: 100%;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &-name {
      max-width: 100%;
      margin-top: 10px;
      padding: 0 5px;
    }
  }
}
</style>
