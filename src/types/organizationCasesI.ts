export enum CasesStatus {
  'Подаются решения' = '218, 133, 44',
  'Решений нет' = '120, 98, 235',
  'Ожидает оценки' = '190, 74, 74'
}

export enum SolutionsStatus {
  'Взято в работу' = '218, 133, 44',
  'Ожидает оценки' = '190, 74, 74'
}

export interface OrganizationCasesI {
  id: number
  title: string
  tags: OrganizationCasesTagsI
  status: keyof CasesStatus
  solutions: {
    amount: number
    info: OrganizationCaseSolutionsI[] | []
  }
  published: string
  finished: string
  description: string
  documents: string[]
}

interface OrganizationCaseSolutionsI {
  id: number
  name: string
  lastUpdated: string
  status: keyof SolutionsStatus
}

export interface OrganizationCasesTagsI {
  category: string[]
  tarif: string
  date: string
}
