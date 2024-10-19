# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
```
📦 src
├── 📁 api/                               # Логика взаимодействия с внешними API
│   ├── dataService.ts                    # Сервис для работы с данными
│   ├── index.ts                          # Точка входа для API модулей
│   ├── organizationService.ts            # Сервис для работы с организациями
│   └── userService.ts                    # Сервис для работы с пользователями
├── 📁 assets/                            # Статические ресурсы (стили, изображения)
│   ├── 📁 base/                          # Базовые стили для проекта
│   │   ├── _reset.scss                   # Сброс стандартных стилей
│   │   ├── _typography.scss              # Стили для типографики
│   │   └── _variables.scss               # Переменные для SCSS
│   ├── 📁 components/                    # Стили для компонентов
│   │   └── 📁 layout/                    # Стили для лэйаута
│   │       ├── registrationStages.scss   # Стили для этапов регистрации
│   │       ├── _header.scss              # Стили для шапки
│   │       └── _sideBar.scss             # Стили для бокового меню
│   └── 📁 media/                         # Медиафайлы
│       ├── 📁 img/                       # Изображения
│       │   ├── profile.png               # Изображение профиля
│       │   ├── 📁 registration/          # Изображения для регистрации
│       │   │   ├── Stage1.png            # Этап регистрации 1
│       │   │   └── ...                   # Другие этапы регистрации
│       └── logo.svg                      # Логотип проекта
├── 📁 components/                        # Переиспользуемые компоненты
│   ├── 📁 common/                        # Общие компоненты
│   │   ├── IOActionButton.vue            # Компонент кнопки действия
│   │   └── ...                           # Другие общие компоненты
│   ├── 📁 icons/                         # Иконки
│   │   └── IconAllCase.vue               # Компонент иконки для всех кейсов
│   ├── 📁 pages/                         # Компоненты страниц
│   │   └── 📁 authorization/             # Страница авторизации
│   │       └── AuthLayout.vue            # Лэйаут для страницы авторизации
│   └── 📁 shadcn/                        # UI-компоненты
│       ├── 📁 ui/                        # UI компоненты
│       │   ├── button/                   # Кнопки
│       │   │   └── ButtonComponent.vue   # Компонент кнопки
│       │   └── ...                       # Другие UI компоненты
├── 📁 helpers/                           # Вспомогательные функции
│   └── vuelidateHelper.ts                # Помощник для валидации данных
├── 📁 router/                            # Маршрутизация приложения
│   └── index.ts                          # Основные маршруты и настройка навигации
├── 📁 stores/                            # Хранилища состояния (Vuex)
│   ├── PopupStore.ts                     # Управление всплывающими окнами
│   ├── 📁 account/                       # Хранилище аккаунтов
│   │   └── UserStore.ts                  # Хранилище пользователей
│   └── 📁 data/                          # Хранилище данных
│       └── DataStore.ts                  # Управление данными
├── 📁 types/                             # Типизация (TypeScript)
│   ├── organizationCasesI.ts             # Типы для кейсов организаций
│   ├── 📁 account/                       # Типы для аккаунтов
│   │   ├── account.ts                    # Типы для аккаунтов
│   └── 📁 componentsProps/               # Типы для пропсов компонентов
│       └── commonProps.ts                # Общие типы пропсов
├── 📁 views/                             # Страницы приложения
│   ├── HomeView.vue                      # Главная страница
│   ├── 📁 common/                        # Общие страницы
│   │   └── AuthorizationView.vue         # Страница авторизации
│   └── 📁 organization/                  # Страницы для организаций
│       └── MyProfileView.vue             # Страница профиля организации
├── App.vue                               # Главный компонент приложения
├── main.ts                               # Точка входа, инициализация Vue
└── package.json                          # Зависимости и скрипты проекта

```
