export enum CasesStatus {
  'Подаются решения' = '218, 133, 44',
  'Решений нет' = '120, 98, 235',
  'Ожидает оценки' = '190, 74, 74'
}

export enum SolutionsStatus {
  'Взято в работу' = '218, 133, 44',
  'Ожидает оценки' = '190, 74, 74'
}

export interface OrganisationCasesI {
  id: number
  title: string
  tags: OrganisationCasesTagsI
  status: keyof CasesStatus
  solutions: {
    amount: number
    info: OrganisationCaseSolutionsI[] | []
  }
  published: string
  finished: string
  description: string
  documents: string[]
}

interface OrganisationCaseSolutionsI {
  id: number
  name: string
  lastUpdated: string
  status: keyof SolutionsStatus
}

export interface OrganisationCasesTagsI {
  category: string[]
  tarif: string
  date: string
}
