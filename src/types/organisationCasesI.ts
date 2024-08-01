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
  status: CasesStatus
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
  name: string
  lastUpdated: string
  status: SolutionsStatus
}

interface OrganisationCasesTagsI {
  category: string
  tarif: string
  date: string
}
