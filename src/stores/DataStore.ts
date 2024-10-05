import { defineStore } from 'pinia'
import DataService from '@/api/dataService'

export const useDataStore = defineStore('useDataStore', () => {
  async function organisationForm() {
    try {
      const response = await DataService.organisationForm()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  async function organisationActivity() {
    try {
      const response = await DataService.fieldOfActivity()
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  async function getFile() {
    try {
      return await DataService.getFile()
    } catch (e) {
      console.log(e)
    }
  }

  return { organisationForm, organisationActivity, getFile }
})
