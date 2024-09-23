import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type { OrganisationProfileI, OrganisationProfileUpdateI } from '@/types/account/organisation'
import type { RegistrationOrganisationI } from '@/types/account/auth'

export default class OrganisationService {
  private static readonly accountBaseUrl = '/account/v1'

  static async registrationOrganisation(data: RegistrationOrganisationI): Promise<AxiosResponse> {
    return $api.post(`${this.accountBaseUrl}/register/org`, data)
  }

  static async patchOrganisation(
    data: OrganisationProfileUpdateI
  ): Promise<AxiosResponse<OrganisationProfileI>> {
    return $api.patch(`${this.accountBaseUrl}/profile/organization`, data)
  }

  static async getOrganisation(): Promise<AxiosResponse<OrganisationProfileI>> {
    return $api.get(`${this.accountBaseUrl}/profile/organization`)
  }
}
