<template>
  <div v-if="popupShow.status" class="popup">
    <div
      :class="[
        'popup__content',
        popupShow.type === 'error' ? 'popup__content--error' : 'popup__content--success'
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePopupStore } from '@/stores/PopupStore'

const popupShow = ref({ status: false, text: '', type: 'error' })
const popupStore = usePopupStore()
defineProps<{
  type: 'error' | 'success'
}>()

popupStore.$subscribe((mutation, state) => {
  popupShow.value = state.isPopup
})
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 10px;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: showIn 0.3s ease-in-out;

  &__content {
    border-radius: 10px;
    background: $default-light-grey;
    padding: 5px 15px;

    &--error {
      background: #f1afaf;
    }

    &--success {
      background: #a6f1af;
    }
  }
}

@keyframes showIn {
  0% {
    top: -50px;
    opacity: 0;
  }
  100% {
    top: 10px;
    opacity: 1;
  }
}
</style>
