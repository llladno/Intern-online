import { $api } from '@/api/index'

export default class DataService {
  private static readonly dataBaseUrl = '/data/v1'

  static async organisationForm() {
    return $api.get(`${this.dataBaseUrl}/org-form/`)
  }

  static async fieldOfActivity() {
    return $api.get(`${this.dataBaseUrl}/field-of-activity/`)
  }
}
