<template>
  <div class="selected-images">
    <div class="selected-images__block" v-for="(item, i) in selectedItems" :key="i">
      <div class="selected-images__block-img" v-if="isFileType(item)">
        <img :src="imageUrls[i]" alt="Uploaded Image" />
      </div>

      <div class="selected-images__block-name">
        {{ selectedItemNames(item) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedItems: File[]
  imageUrls: string[]
}>()

const isFileType = (item: any) => item instanceof File

const selectedItemNames = (item: File) => {
  const trimmedName = item.name.length > 15 ? item.name.slice(0, 10) + '...' : item.name
  const fileType = item.type.replace('image/', '')
  return `${trimmedName} /${fileType}`
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

    &-name {
      max-width: 100%;
      margin-top: 10px;
      padding: 0 5px;
    }
  }
}
</style>
