import { email, helpers, required } from '@vuelidate/validators'

export const defaultErrorMessage = {
  required: helpers.withMessage('Поле обязательно', required)
}

export const emailCheckMessage = {
  required: helpers.withMessage('Неверный формат почты', email)
}
