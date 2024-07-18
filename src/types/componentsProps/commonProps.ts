export interface InputPropsI {
  props: any
  big: boolean
  placeholder: string
  type: string
}

export interface SelectPropsI {
  placeholder: string,
  label: string
  options: SelectPropsOptionI[]
}

interface SelectPropsOptionI {
  value: string
  label: string
}
