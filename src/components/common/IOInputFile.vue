<template>
  <div class="input-file">
    <input
      class="input-file__text"
      type="file"
      id="file"
      accept="image/jpeg, image/jpg, image/png, image/gif, image/webp"
      @change="handleFileChange"
    />
    <label class="input-file__label" for="file">Выберите файл</label>
    <span class="input-file__name p-14-500" v-if="model">{{ fileInfo }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const model = ref<File | null>(null)

const emit = defineEmits<{
  (e: 'update:modelValue', value: File | null): void
}>()

const fileInfo = computed((): string => {
  if (model.value) {
    const trimmedName = model.value.name.slice(0, 20)
    const fileType = model.value.type.replace('image/', '')
    return `${trimmedName}${model.value.name.length > 20 ? '...' : ''} /${fileType}`
  }
  return ''
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (target.files && target.files.length > 0) {
    const file = target.files[0]

    const validFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!validFormats.includes(file.type)) {
      alert(
        'Недопустимый формат файла. Пожалуйста, выберите изображение (JPEG, JPG, PNG, GIF, WEBP).'
      )
      target.value = ''
      return
    }

    const maxSizeInBytes = 5 * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      alert('Размер файла превышает 5 МБ. Пожалуйста, выберите изображение меньшего размера.')
      target.value = ''
      return
    }

    model.value = file
    emit('update:modelValue', model.value)
  } else {
    model.value = null
    emit('update:modelValue', null)
  }
}
</script>

<style scoped lang="scss">
.input-file {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;

  &__text {
    display: none;
  }

  &__label {
    display: inline-block;
    background: $default-light-grey;
    border: $default-border;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    transition: $default-transition;

    &:hover {
      background: $default-white;
      border: 2px solid $primary-color;
    }
  }
}
</style>
