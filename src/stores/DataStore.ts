import { defineStore } from 'pinia'
import DataService from '@/api/dataService'

export const useDataStore = defineStore('useDataStore', () => {
  const organisationForm = async () => {
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

  async function getFile() {
    try {
      const response = await DataService.getFile()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  return { organisationForm, organisationActivity, getFile }
})
