export type AccountType = 1 | 2 | 3

export enum AccountTypeEnum {
  'manager' = 1,
  'account' = 2
}

export interface RegistrationI {
  email: string
  account_type: AccountType
}

export interface RegistrationUpdateI extends Partial<RegistrationI> {}
