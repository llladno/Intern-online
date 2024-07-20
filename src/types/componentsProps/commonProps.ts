export interface InputPropsI {
  props?: any
  big?: boolean
  placeholder?: string
  type?: string
  background?: string
  padding?: string
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
