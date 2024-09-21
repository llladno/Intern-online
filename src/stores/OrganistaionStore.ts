import { defineStore } from 'pinia'
import { $api } from '@/api'
import UserService from '@/api/userService'
import { usePopupStore } from '@/stores/popupStore'
import type { UserRegistrationI } from '@/types/userI'
import OrganisationService from '@/api/organisationService'
import type { OrganisationProfileUpdateI } from '@/types/account/organisation'

export const useOrganisationStore = defineStore('organisationStore', () => {
  function updateOrganisationProfile(updatedData: OrganisationProfileUpdateI) {
    try {
      return OrganisationService.patchOrganisation(updatedData)
    } catch (e) {
      console.log(e)
    }
  }

  function getOrganisationProfile() {
    try {
      return OrganisationService.getOrganisation()
    } catch (e) {
      console.log(e)
    }
  }

  return { updateOrganisationProfile, getOrganisationProfile }
})
