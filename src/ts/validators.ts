import { helpers } from '@vuelidate/validators'

export const maxFileSize = (maxSizeInBytes: number) => {
  return helpers.withMessage(
    `Размер файла не должен превышать ${maxSizeInBytes / (1024 * 1024)} МБ.`,
    (value) => {
      return !value || (value instanceof File && value.size <= maxSizeInBytes)
    }
  )
}
