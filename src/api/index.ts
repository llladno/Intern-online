import axios from 'axios'

export const $api = axios.create({
  baseURL: 'http://159.253.21.83/api'
})
