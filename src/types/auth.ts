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

export interface RegistrationOrganizationI {
  email: string
  name: string
  organization_form: number | string
  inn: string
  field_of_activity: number | string
}

export interface ResetPasswordI {
  old_password: string
  password: string
  password2: string
}

export interface StagesDataI {
  name?: string
  surname?: string
  patronymic?: string
  activity?: string
  email?: string
  inn?: string
  organization_form?: string
  field_of_activity?: string
}

export interface AllStagesDataI {
  accountType: 'manager' | 'account' | ''
  data: StagesDataI
}
