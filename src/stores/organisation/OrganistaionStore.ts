import { defineStore } from 'pinia'
import OrganisationService from '@/api/organisationService'
import type { OrganisationProfileI, OrganisationProfileUpdateI } from '@/types/account/organisation'
import { useDataStore } from '@/stores/data/DataStore'
import { ref } from 'vue'

export const useOrganisationStore = defineStore('organisationStore', () => {
  const organisationProfile = ref<OrganisationProfileI>()
  const organisationForm = ref()

  function updateOrganisationProfile(updatedData: OrganisationProfileUpdateI) {
    try {
      return OrganisationService.patchOrganisation(updatedData)
    } catch (e) {
      console.log(e)
    }
  }

  async function getOrganisationProfile() {
    try {
      organisationProfile.value = (await OrganisationService.getOrganisation()).data
      organisationForm.value = await useDataStore().organisationForm()
    } catch (e) {
      console.log(e)
    }
  }

  async function getOrganisationForm() {
    try {
      const response = await useDataStore().organisationForm()
      organisationForm.value = response.data
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
    getOrganisationForm
  }
})
