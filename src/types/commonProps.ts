import type { Ref } from 'vue'
export interface InputPropsI {
  props?: any
  big?: boolean
  icon?: boolean
  placeholder?: string
  type?: string
  fullWidth?: boolean
  width?: string
  background?: string
  padding?: string
  value?: string
}

export interface SelectPropsI {
  placeholder?: string
  label?: string
  id?: string | number
  modelValue?: number | string | null
  isLabel?: boolean
  options: SelectPropsOptionI[]
}

export interface SelectPropsOptionI {
  value: string | number
  label: string
  id?: number | string
}

export interface ButtonPropsI {
  fullWidth?: boolean
  outlined?: boolean
  icon?: boolean
  background?: string
  width?: string
  disable?: boolean
  loading?: boolean
}

export interface CheckboxPropsI {
  id: string
  label?: string
  value: string
  checked: boolean
}
export interface ErrorI {
  error?: {
    $uid: string
    $message: string | Ref<string>
  }[]
}
