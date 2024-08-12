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
}

export interface CheckboxPropsI {
  id: string
  label: string
  value: string
  checked?: boolean
}
