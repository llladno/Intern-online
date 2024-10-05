/**
 * Interface representing an organization's profile.
 */
export interface OrganisationProfileI {
  id: number
  name: string
  phone_number: string
  inn: string
  email: string
  website: string
  address: string
  describe: string
  updated_at: string
  logo?: OrganisationLogoI
  organization_form: number
  field_of_activity: number
}

/**
 * Interface for updating an organization's profile, allowing partial updates.
 * Extends the base `OrganisationProfileI` but makes all properties optional.
 */
export interface OrganisationProfileUpdateI extends Partial<OrganisationProfileI> {}

/**
 * Interface for making requests to create or modify an organization's profile.
 * Omits the `updated_at` field from `OrganisationProfileI` as it's typically managed by the system.
 */
export interface OrganisationProfileRequestI extends Omit<OrganisationProfileI, 'updated_at'> {}

export interface OrganisationLogoI {
  file: string
  account: number
}
