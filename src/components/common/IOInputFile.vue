<template>
  <div class="input-file">
    <input
      class="input-file__text"
      type="file"
      id="file"
      :accept="
        props.fileType === 'img'
          ? 'image/jpeg, image/jpg, image/png, image/gif, image/webp'
          : 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      "
      @change="handleFileChange"
    />
    <label class="input-file__label" for="file">Выберите файл</label>
    <span class="input-file__name p-14-500" v-if="fileInfo">{{ fileInfo }}</span>
    <TransitionGroup name="error">
      <div class="input-file__error" v-for="element in props.error" :key="element.$uid">
        <div class="input-file__error-message p-13-400">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface ErrorI {
  error?: {
    $uid: string
    $message: string | Ref<string>
  }[]
}
const props = defineProps<
  ErrorI & {
    fileType: 'img' | 'doc' // Добавлен проп для типа файла
  }
>()

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
  position: relative;
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
  &__error {
    position: absolute;
    bottom: -33px;
    left: 0;
    &-message {
      color: $error-color;
    }
  }

  .error {
    &-enter-active {
      transition: $default-transition;
    }

    &-leave-active {
      transition: $default-transition;
    }

    &-enter-from {
      transform: translateX(-30px);
      opacity: 0;
    }
    &-leave-to {
      transform: translateX(100px);
      opacity: 0;
    }
  }
}
</style>
