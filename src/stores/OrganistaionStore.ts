import { defineStore } from 'pinia'
import OrganisationService from '@/api/organisationService'
import type { OrganisationProfileI, OrganisationProfileUpdateI } from '@/types/organisation'
import { useDataStore } from '@/stores/DataStore'
import { ref } from 'vue'
import type { ResetPasswordI } from '@/types/auth'
import DataService from '@/api/dataService'
import type { OrganisationFormI, ProfileFileI } from '@/types/data'

export const useOrganisationStore = defineStore('organisationStore', () => {
  const organisationProfile = ref<OrganisationProfileI>()
  const organisationForm = ref()

  const updateOrganisationProfile = (updatedData: OrganisationProfileUpdateI) => {
    try {
      return OrganisationService.patchOrganisation(updatedData)
    } catch (e) {
      console.log(e)
    }
  }

  const getOrganisationProfile = async (): Promise<void> => {
    try {
      const getOrganisation = await OrganisationService.getOrganisation()
      organisationProfile.value = getOrganisation.data
      organisationForm.value = await useDataStore().organisationForm()
    } catch (e) {
      console.log(e)
    }
  }

  const getOrganisationForm = async (): Promise<OrganisationFormI[] | undefined> => {
    try {
      const response: OrganisationFormI[] | undefined = await useDataStore().organisationForm()
      organisationForm.value = response
      return response
    } catch (e) {
      console.log(e)
    }
  }

  const changePassword = async (data: ResetPasswordI, id: number) => {
    try {
      const response = await OrganisationService.changePassword(data, id)
      return response.data
    } catch (e) {
      throw new Error('error')
    }
  }

  const loadProfileFile = async (data: ProfileFileI) => {
    try {
      const response = await DataService.loadProfileFile(data)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  return {
    organisationProfile,
    organisationForm,
    updateOrganisationProfile,
    getOrganisationProfile,
    getOrganisationForm,
    changePassword,
    loadProfileFile
  }
})
