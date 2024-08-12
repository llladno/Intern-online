import { defineStore } from 'pinia'
import type { UserRegistrationI } from '@/types/userI'
import UserService from '@/api/userService'

export const useUserStore = defineStore('userStore', () => {
  async function signUp(data: UserRegistrationI) {
    try {
      return await UserService.registration(data)
    } catch (e) {
      console.log(e)
    }
  }

  async function signIn(data: Omit<UserRegistrationI, 'organisation'>) {
    try {
      await UserService.login(data).then((response) => console.log(response)) // {} Пустой массив убрал из-за warning
    } catch (e) {
      console.log(e)
    }
  }

  async function getTestUserList() {
    try {
      return await UserService.getTestUserList()
    } catch (e) {
      console.log(e)
    }
  }

  return { signUp, signIn, getTestUserList }
})
