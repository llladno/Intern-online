export interface OrganizationFormI {
  value: number
  label: string
}

export interface ProfileFileI {
  file: File
  account: number
}

export interface FileUploadI extends ProfileFileI {
  id: number
}

export interface OrganizationFieldOfActivityI {
  id: number
  value: number
}

export interface jwtTokenI {
  token_type: string
  exp: number
  iat: number
  jti: string
  user_id: number
  account_type: number
  organization: boolean
  organization_employee: boolean
}
