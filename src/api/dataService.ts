import { $api } from '@/api/index'
import type { ProfileFileI } from '@/types/data'

export default class DataService {
  private static readonly dataBaseUrl = '/data/v1'

  static async organisationForm() {
    return $api.get(`${this.dataBaseUrl}/org-form/`)
  }

  static async fieldOfActivity() {
    return $api.get(`${this.dataBaseUrl}/field-of-activity/`)
  }

  static async getFile() {
    return $api.get(`${this.dataBaseUrl}/file`)
  }

  static async loadProfileFile(data: ProfileFileI) {
    return $api.post(`${this.dataBaseUrl}/file`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
