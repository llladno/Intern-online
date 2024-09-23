import { helpers, required } from '@vuelidate/validators'

export const defaultErrorMessage = {
  required: helpers.withMessage('Поле обязательно', required)
}
