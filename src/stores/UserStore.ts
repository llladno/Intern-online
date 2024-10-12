import { defineStore } from 'pinia'
import { $api } from '@/api'
import UserService from '@/api/userService'
import { usePopupStore } from '@/stores/PopupStore'
import type { LoginI, UserRegistrationI } from '@/types/userI'
import OrganisationService from '@/api/organisationService'
import type { RegistrationOrganisationI } from '@/types/auth'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('userStore', () => {
  const popupStore = usePopupStore()
  const router = useRouter()

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

  async function signIn(data: LoginI) {
    try {
      await UserService.login(data).then((response) => {
        $api.defaults.headers.common.Authorization = `Bearer ${response.data.access}`
        document.cookie = `refresh=${response.data.refresh}; path=/; secure; samesite=strict`
        localStorage.setItem('access', response.data.access) //TODO: изменить
      })
      await router.push('/')
    } catch (e) {
      throw new Error('error')
    }
  }

  async function session() {
    const access = localStorage.getItem('access')
    $api.defaults.headers.common.Authorization = `Bearer ${access}`
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

  const changePassword = async (email: string) => {
    try {
      return await UserService.resetPassword(email)
    } catch (e) {
      throw new Error('error')
    }
  }

  return { signUp, signIn, getTestUserList, signUpOrganisation, session, changePassword }
})
