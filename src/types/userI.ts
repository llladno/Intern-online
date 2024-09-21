import type { AccountTypeEnum } from '@/types/account/auth'

export interface UserRegistrationI {
  email: string
  account_type: AccountTypeEnum
}

export interface TokensI {
  access: string
  refresh: string
}
