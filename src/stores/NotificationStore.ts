import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NotificationI } from '@/types/notification'

export const useNoticeStore = defineStore('noticeStore', () => {
  const notice = ref<NotificationI>()

  const noticeShow = (message: string, type: NotificationI['type']) => {
    notice.value = { message: message, type: type, isShow: true }
  }

  const noticeHide = () => {
    notice.value = { message: '', type: 'error', isShow: false }
  }

  return { notice, noticeShow, noticeHide }
})
