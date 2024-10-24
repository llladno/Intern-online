import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type { LoginI, TokensI, UserRegistrationI } from '@/types/userI'

export default class UserService {
  private static readonly accountBaseUrl = '/account/v1'
  private static readonly tokenBaseUrl = '/token'

  static async registration(data: UserRegistrationI): Promise<AxiosResponse> {
    return $api.post(`${this.accountBaseUrl}/register`, data)
  }

  static async login(data: LoginI): Promise<AxiosResponse<TokensI>> {
    return $api.post(`${this.tokenBaseUrl}/`, data)
  }

  static async getTestUserList() {
    return $api.get(`${this.accountBaseUrl}/user`)
  }

  static async resetPassword(email: string) {
    return $api.get(`${this.accountBaseUrl}/reset_password/${email}`)
  }
}
