import { defineStore } from 'pinia'
import DataService from '@/api/dataService'
import type { OrganisationFieldOfActivityI, OrganisationFormI } from '@/types/data'

export const useDataStore = defineStore('useDataStore', () => {
  const organisationForm = async (): Promise<OrganisationFormI[] | undefined> => {
    try {
      const response = await DataService.organisationForm()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  const organisationActivity = async () => {
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

  return { organisationForm, organisationActivity, getFile }
})
