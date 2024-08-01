import { CasesStatus, type OrganisationCasesI, SolutionsStatus } from '@/types/organisationCasesI'

export const casesInfo: OrganisationCasesI[] = [
  {
    id: 1,
    title: 'Кейс №1',
    tags: {
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Подаются решения' as CasesStatus,
    solutions: {
      amount: 20,
      info: [
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        },
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
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
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Ожидает оценки',
    solutions: {
      amount: 20,
      info: [
        {
          name: 'Фамилия имя',
          lastUpdated: new Date(2024, 5, 20).toLocaleDateString(),
          status: 'Взято в работу'
        }
      ]
    },
    published: new Date(2024, 5, 20).toLocaleDateString(),
    finished: new Date(2024, 6, 20).toLocaleDateString(),
    description:
      'Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров в значительной степени обуславливает создание модели развития.'
  },
  {
    id: 1,
    title: 'Кейс №1',
    tags: {
      category: 'Маркетинг',
      tarif: 'Лайт',
      date: new Date(2024, 5, 20).toLocaleDateString()
    },
    status: 'Подаются решения',
    solutions: {
      amount: 0,
      info: []
    },
    published: new Date(2024, 5, 20).toLocaleDateString(),
    finished: new Date(2024, 6, 20).toLocaleDateString(),
    description:
      'Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Товарищи! рамки и место обучения кадров позволяет оценить значение модели развития. Товарищи! укрепление и развитие структуры в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров в значительной степени обуславливает создание модели развития.'
  }
]
