import { defineStore } from 'pinia'
import OrganizationService from '@/api/organizationService'
import type { OrganizationProfileI, OrganizationProfileUpdateI } from '@/types/organization'
import { useDataStore } from '@/stores/DataStore'
import { ref } from 'vue'
import type { ResetPasswordI } from '@/types/auth'
import DataService from '@/api/dataService'
import type { OrganizationFormI, ProfileFileI } from '@/types/data'

export const useOrganizationStore = defineStore('organizationStore', () => {
  const organizationProfile = ref<OrganizationProfileI>()
  const organizationForm = ref<OrganizationFormI[]>()

  const updateOrganizationProfile = (updatedData: OrganizationProfileUpdateI) => {
    try {
      return OrganizationService.patchOrganization(updatedData)
    } catch (e) {
      console.log(e)
    }
  }

  const getOrganizationProfile = async (): Promise<void> => {
    try {
      const getOrganization = await OrganizationService.getOrganization()
      organizationProfile.value = getOrganization.data
      organizationForm.value = await useDataStore().organizationForm()
    } catch (e) {
      console.log(e)
    }
  }

  const getOrganizationForm = async (): Promise<OrganizationFormI[] | undefined> => {
    try {
      const response: OrganizationFormI[] | undefined = await useDataStore().organizationForm()
      organizationForm.value = response
      return response
    } catch (e) {
      console.log(e)
    }
  }

  const changePassword = async (data: ResetPasswordI, id: number) => {
    try {
      const response = await OrganizationService.changePassword(data, id)
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
    organizationProfile,
    organizationForm,
    updateOrganizationProfile,
    getOrganizationProfile,
    getOrganizationForm,
    changePassword,
    loadProfileFile
  }
})
