/**
 * Interface representing an organization's profile.
 */
export interface OrganizationProfileI {
  id: number
  name: string
  phone_number: string
  inn: string
  email: string
  website: string
  address: string
  describe: string
  updated_at: string
  logo?: OrganizationLogoI
  organization_form: number
  field_of_activity: number
}

/**
 * Interface for updating an organization's profile, allowing partial updates.
 * Extends the base `OrganizationProfileI` but makes all properties optional.
 */
export interface OrganizationProfileUpdateI extends Partial<OrganizationProfileI> {}

/**
 * Interface for making requests to create or modify an organization's profile.
 * Omits the `updated_at` field from `OrganizationProfileI` as it's typically managed by the system.
 */
export interface OrganizationProfileRequestI extends Omit<OrganizationProfileI, 'updated_at'> {}

export interface OrganizationLogoI {
  file: string
  account: number
}

export interface AccountOrganizationRegistrationI {
  id: number
  email: string
}
