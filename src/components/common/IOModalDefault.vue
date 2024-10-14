<template>
  <div class="modal">
    <IOButton icon @click="openModal" background="white" width="211">{{ label }}</IOButton>
    <transition name="modal">
      <div class="modal__overlay" v-if="isVisible" @click.self="closeModal">
        <div class="modal__content" @click.stop>
          <button class="modal__close" @click="closeModal">
            <IconClose />
          </button>
          <slot name="header"></slot>
          <slot></slot>
          <div class="modal__footer">
            <IOButton outlined width="183" @click="handleCansel">Отмена</IOButton>
            <IOButton width="183" @click="handleSave" :disabled="disabled">Сохранить</IOButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IOButton from '@/components/common/IOButton.vue'
import IconClose from '@/components/icons/IconClose.vue'

defineProps<{
  label: string
  disabled?: boolean
}>()

const emits = defineEmits<{
  (e: 'save'): void
  (e: 'cansel'): void
}>()

const isVisible = ref<boolean>(false)

const openModal = () => {
  isVisible.value = true
  document.body.classList.add('no-scroll')
}

const closeModal = () => {
  isVisible.value = false
  document.body.classList.remove('no-scroll')
}

const handleSave = () => {
  closeModal()
  emits('save')
}
const handleCansel = () => {
  closeModal()
  emits('cansel')
}
</script>

<style lang="scss" scoped>
.modal {
  margin-top: 17px;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($additional-color, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 75px;
    z-index: 10;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
    background: $default-white;
    padding: 50px 85px 68px;
    border-radius: 5px;
    position: relative;
    max-width: 558px;
    min-height: 407px;
    width: 100%;
    transition: $default-transition;
  }
  &__close {
    position: absolute;
    top: 19px;
    right: 19px;
    cursor: pointer;
  }
  &__footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    row-gap: 22px;
    margin-top: auto;
  }
  &-enter-active {
    transition: transform 0.3s ease-out;
  }
  &-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  &-enter-to,
  &-leave {
    opacity: 1;
    transform: translateY(0);
  }

  &-leave-active {
    transition: all 0.2s ease-in;
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
