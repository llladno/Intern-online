export interface OrganisationFormI {
  value: number
  label: string
}

export interface ProfileFileI {
  file: File
  account: number
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
