import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type {
  AccountOrganizationRegistrationI,
  OrganizationProfileI,
  OrganizationProfileUpdateI
} from '@/types/organization'
import type { RegistrationOrganizationI, ResetPasswordI } from '@/types/auth'

export default class OrganizationService {
  private static readonly accountBaseUrl = '/account/v1'

  static async registrationOrganization(
    data: RegistrationOrganizationI
  ): Promise<AxiosResponse<AccountOrganizationRegistrationI>> {
    return $api.post(`${this.accountBaseUrl}/register/org`, data)
  }

  static async patchOrganization(
    data: OrganizationProfileUpdateI
  ): Promise<AxiosResponse<OrganizationProfileI>> {
    return $api.patch(`${this.accountBaseUrl}/profile/organization`, data)
  }

  static async getOrganization(): Promise<AxiosResponse<OrganizationProfileI>> {
    return $api.get(`${this.accountBaseUrl}/profile/organization`)
  }

  static async changePassword(
    data: ResetPasswordI,
    id: number
  ): Promise<AxiosResponse<ResetPasswordI>> {
    return $api.put(`${this.accountBaseUrl}/change_password/${id}`, data)
  }
}
