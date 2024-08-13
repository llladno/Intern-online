export interface InputPropsI {
  props?: any
  big?: boolean
  placeholder?: string
  type?: string
  fullWidth?: boolean
  background?: string
  padding?: string
  value?: string
}

export interface SelectPropsI {
  placeholder: string
  label?: string
  options: SelectPropsOptionI[]
}

export interface SelectPropsOptionI {
  value: string
  label: string
  id?: string
}

export interface ButtonPropsI {
  fullWidth?: boolean
  outlined?: boolean
}

export interface CheckboxPropsI {
  id: string
  label: string
  value: string
  checked?: boolean
}
