import type { AccountTypeEnum } from '@/types/auth'

export interface UserRegistrationI {
  email: string
  account_type: AccountTypeEnum
}

export interface TokensI {
  access: string
  refresh: string
}

export interface LoginI {
  email: string
  password: string
}
