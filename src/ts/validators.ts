import { helpers } from '@vuelidate/validators'

export const maxFileSize = (maxSizeInBytes: number) => {
  return helpers.withMessage(
    `Размер файла не должен превышать ${maxSizeInBytes / (1024 * 1024)} МБ.`,
    (value) => {
      return !value || (value instanceof File && value.size <= maxSizeInBytes)
    }
  )
}

export const urlValidator = (value: string): boolean => {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlPattern.test(value)
}

export const uniqueFileValidator = (items: File[]) => {
  return helpers.withMessage('Этот файл уже добавлен.', (value: File) => {
    if (!value) return true
    if (items.length === 0) return true
    return !items.some((item) => item.name === value.name && item.size === value.size)
  })
}
