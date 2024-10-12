<template>
  <transition name="notice-slide">
    <div v-if="notice?.isShow" :class="['notice', `notice--${notice.type}`]">
      <div class="notice__icon">
        <icon-done />
      </div>
      <span class="notice__message p-20-500">{{ notice.message }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useNoticeStore } from '@/stores/NotificationStore'
import { ref, watch } from 'vue'
import type { NotificationI } from '@/types/notification'
import IconDone from '@/components/icons/IconDone.vue'

const noticeStore = useNoticeStore()

const notice = ref<NotificationI>()

watch(
  () => noticeStore.notice,
  () => {
    if (noticeStore.notice?.isShow) {
      notice.value = noticeStore.notice
      setTimeout(() => {
        noticeStore.noticeHide()
      }, 3000)
    } else {
      if (notice.value) notice.value.isShow = false
    }
  }
)
</script>

<style scoped lang="scss">
.notice-slide-enter-active,
.notice-slide-leave-active {
  transition: all 0.35s ease-out;
}

.notice-slide-enter-from,
.notice-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.notice {
  position: fixed;
  top: 20px;
  right: 0;
  margin: 15px;
  padding: 12px 18px;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  gap: 15px;

  &__icon {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb($default-white, 0.5);
    border-radius: 50%;
  }

  &--success {
    background: $light-green;

    .notice__message {
      color: $green-text;
    }
  }

  &--error {
    background: $light-red;

    .notice__message {
      color: $error-color;
    }
  }
}
</style>
