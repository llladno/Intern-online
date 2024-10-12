export interface NotificationI {
  isShow: boolean
  message: string
  type: NotificationTypes
}

export type NotificationTypes = 'success' | 'info' | 'warning' | 'error'
