export interface UserExperienceI {
  id: number
  company: string
  position: string
  startDate: string | null
  endDate: string | null
  isCurrent: boolean
  isNew: boolean
}
export interface UserFileUploadI {
  label: string
  modalLabel: string
  modalTitle: string
  files: File[]
  fileType: 'img' | 'doc'
}
export interface UserTempalateI {
  id?: number | string
  value: string | number
  label: string
}
export interface UserI {
  lastName: string
  firstName: string
  middleName: string
  date: string
  website: string
  aboutUser: string
  education: string
  university: string
  experiences: UserExperienceI[]
  skill: string
  program: string
  images: File[]
  documents: File[]
}
