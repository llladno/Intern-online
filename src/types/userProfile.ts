export interface UserExperienceI {
  id: number
  company: string
  position: string
  startDate: string | null
  endDate: string | null
  isCurrent: boolean
  isNew: boolean
}
