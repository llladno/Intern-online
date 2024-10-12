import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type {
  AccountOrganisationRegistrationI,
  OrganisationProfileI,
  OrganisationProfileUpdateI
} from '@/types/organisation'
import type { RegistrationOrganisationI, ResetPasswordI } from '@/types/auth'

export default class OrganisationService {
  private static readonly accountBaseUrl = '/account/v1'

  static async registrationOrganisation(
    data: RegistrationOrganisationI
  ): Promise<AxiosResponse<AccountOrganisationRegistrationI>> {
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

  static async changePassword(
    data: ResetPasswordI,
    id: number
  ): Promise<AxiosResponse<ResetPasswordI>> {
    return $api.put(`${this.accountBaseUrl}/change_password/${id}`, data)
  }
}
