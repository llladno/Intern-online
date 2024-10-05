import { jwtDecode } from 'jwt-decode'
import type { jwtTokenI } from '@/types/data'

export const getTokenId = (token?: string) => {
  return getToken()?.user_id
}

export const getToken = (): jwtTokenI | undefined => {
  const getToken = localStorage.getItem('access')
  return jwtDecode(getToken ?? '')
}
