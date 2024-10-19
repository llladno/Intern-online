import { defineStore } from 'pinia'
import DataService from '@/api/dataService'
import type { OrganizationFormI } from '@/types/data'

export const useDataStore = defineStore('useDataStore', () => {
  const organizationForm = async (): Promise<OrganizationFormI[] | undefined> => {
    try {
      const response = await DataService.organizationForm()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const organizationActivity = async () => {
    try {
      const response = await DataService.fieldOfActivity()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const getFile = async () => {
    try {
      const response = await DataService.getFile()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  return { organizationForm, organizationActivity, getFile }
})
