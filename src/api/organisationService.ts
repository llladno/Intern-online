import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type { UserRegistrationI } from '@/types/userI'
import type { OrganisationProfileI, OrganisationProfileUpdateI } from '@/types/account/organisation'

export default class OrganisationService {
  private static readonly accountBaseUrl = '/account/v1'
  private static readonly tokenBaseUrl = '/token'

  static async registrationOrganisation(data: UserRegistrationI): Promise<AxiosResponse> {
    return $api.post(`${this.accountBaseUrl}/register`, data)
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
