import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popupStore', () => {
  const isPopup = { status: false, text: '', type: 'error' }

  return {isPopup}
})
