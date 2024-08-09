export interface UserRegistrationI {
  email: string
  password: string
  organisation: boolean
}

export interface TokensI {
  access: string,
  refresh: string
}