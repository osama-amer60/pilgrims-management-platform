import axios from 'axios'
import { API_CONFIG } from '@/config/api.config'

export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access - please login')
    }

    if (error.response?.status === 500) {
      console.error('Server error occurred')
    }

    return Promise.reject(error)
  },
)
