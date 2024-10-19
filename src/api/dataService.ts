import { $api } from '@/api/index'
import type {
  FileUploadI,
  OrganizationFieldOfActivityI,
  OrganizationFormI,
  ProfileFileI
} from '@/types/data'
import type { AxiosResponse } from 'axios'

export default class DataService {
  private static readonly dataBaseUrl = '/data/v1'

  static async fieldOfActivity(): Promise<AxiosResponse<OrganizationFieldOfActivityI[]>> {
    return $api.get(`${this.dataBaseUrl}/field-of-activity/`)
  }

  static async getFile(): Promise<AxiosResponse<FileUploadI>> {
    return $api.get(`${this.dataBaseUrl}/file`)
  }

  static async loadProfileFile(data: ProfileFileI): Promise<AxiosResponse<FileUploadI>> {
    return $api.post(`${this.dataBaseUrl}/file`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  static async organizationForm(): Promise<AxiosResponse<OrganizationFormI[]>> {
    return $api.get(`${this.dataBaseUrl}/org-form/`)
  }
}
