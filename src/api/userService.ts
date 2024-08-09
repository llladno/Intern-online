import type { AxiosResponse } from 'axios'
import { $api } from '@/api/index'
import type { TokensI, UserRegistrationI } from '@/types/userI'

export default class UserService {
  private static readonly accountBaseUrl = '/account/v1'
  private static readonly tokenBaseUrl = '/token'

  static async registration(data: UserRegistrationI): Promise<AxiosResponse> {
    return $api.post(`${this.accountBaseUrl}/register`, data)
  }

  static async login(data: Omit<UserRegistrationI, 'organisation'>):Promise<AxiosResponse<TokensI>> {
    return $api.post(`${this.tokenBaseUrl}/`, data)
  }

  static async getTestUserList() {
    return $api.get(`${this.accountBaseUrl}/user`, {
      headers: {
        Authorization:
          'Barer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxNTkwMDY0LCJpYXQiOjE3MjE1ODY0NjQsImp0aSI6IjJmNjcyZDQ5ZmU4MjRiZmJhNTYxODhkMjk3ODc0NDBjIiwidXNlcl9pZCI6Mn0.IWIOIK6UX6wy_v833FcF1vp1JnkzzfBP1SpUf5qESuQ'
      }
    })
  }
}
