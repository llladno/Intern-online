import { CasesStatus, type OrganizationCasesI, SolutionsStatus } from '@/types/organizationCasesI'

export const casesInfo: OrganizationCasesI[] = [
  {
    id: 1,
    title: 'Кейс №1',
    tags: {
      category: ['Маркетинг', 'IT'],
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Подаются решения' as keyof CasesStatus,
    solutions: {
      amount: 20,
      info: [
        {
          id: 0,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        },
        {
          id: 1,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        }
      ]
    },
    documents: ['Навзание документа', 'Навзание документа', 'Навзание документа'],
    published: new Date(2024, 5, 20).toLocaleDateString(),
    finished: new Date(2024, 6, 20).toLocaleDateString(),
    description:
      'Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров в значительной степени обуславливает создание модели развития.'
  },
  {
    id: 1,
    title: 'Кейс №1',
    tags: {
      category: ['Маркетинг'],
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Ожидает оценки' as keyof CasesStatus,
    solutions: {
      amount: 20,
      info: [
        {
          id: 0,
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу' as keyof SolutionsStatus
        }
      ]
    },
    documents: ['Навзание документа', 'Навзание документа', 'Навзание документа'],
    published: new Date(2024, 5, 20).toLocaleDateString(),
    finished: new Date(2024, 6, 20).toLocaleDateString(),
    description:
      'Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров в значительной степени обуславливает создание модели развития.'
  },
  {
    id: 1,
    title: 'Кейс №1',
    tags: {
      category: ['Маркетинг', 'IT'],
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Решений нет' as keyof CasesStatus,
    solutions: {
      amount: 0,
      info: []
    },
    documents: ['Навзание документа', 'Навзание документа', 'Навзание документа'],
    published: new Date(2024, 5, 20).toLocaleDateString(),
    finished: new Date(2024, 6, 20).toLocaleDateString(),
    description:
      'Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров в значительной степени обуславливает создание модели развития.'
  }
]
