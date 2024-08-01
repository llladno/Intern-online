export interface InputPropsI {
  props?: any
  big?: boolean
  placeholder?: string
  type?: string
  fullWidth?: boolean
}

export interface SelectPropsI {
  placeholder: string
  label: string
  options: SelectPropsOptionI[]
}

interface SelectPropsOptionI {
  value: string
  label: string
}

export interface ButtonPropsI {
  fullWidth?: boolean
  outlined?: boolean
}
