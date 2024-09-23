import { defineStore } from 'pinia'
import { $api } from '@/api'
import UserService from '@/api/userService'
import { usePopupStore } from '@/stores/PopupStore'
import type { UserRegistrationI } from '@/types/userI'
import OrganisationService from '@/api/organisationService'
import type { OrganisationProfileUpdateI } from '@/types/account/organisation'
import type { RegistrationOrganisationI } from '@/types/account/auth'

export const useUserStore = defineStore('userStore', () => {
  const popupStore = usePopupStore()
  async function signUp(data: UserRegistrationI) {
    try {
      return await UserService.registration(data)
    } catch (e) {
      console.log(e)
    }
  }

  async function signUpOrganisation(registrationData: RegistrationOrganisationI) {
    try {
      return OrganisationService.registrationOrganisation(registrationData)
    } catch (e) {
      console.log(e)
    }
  }

  async function signIn(data: Omit<UserRegistrationI, 'organisation'>) {
    try {
      await UserService.login(data).then((response) => {
        $api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
        document.cookie = `refresh=${response.data.refresh}; path=/; secure; samesite=strict`
      })
    } catch (e) {
      console.log(e)
    }
  }

  async function getTestUserList() {
    try {
      return await UserService.getTestUserList()
    } catch (e) {
      console.log('err')
      popupStore.$patch({
        isPopup: { status: true, text: 'Ошибка запроса', type: 'error' }
      })
    }
  }

  return { signUp, signIn, getTestUserList, signUpOrganisation }
})
