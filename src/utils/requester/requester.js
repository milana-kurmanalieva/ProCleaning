import { BASE_URL } from '@utils/constants/constants'
import axios from 'axios'

export const requester = axios.create( {
  baseURL: BASE_URL,
} )