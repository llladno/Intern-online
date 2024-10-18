export const maxFileSize = (maxSizeInBytes: number) => {
  return (value: File | null) => {
    return !value || (value instanceof File && value.size <= maxSizeInBytes)
  }
}

export const urlValidator = (value: string): boolean => {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlPattern.test(value)
}

export const uniqueFileValidator = (items: File[]) => {
  return (value: File | null) => {
    if (!value) return true
    if (items.length === 0) return true
    return !items.some((item) => item.name === value.name && item.size === value.size)
  }
}
