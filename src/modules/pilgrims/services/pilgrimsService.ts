import { apiClient } from '@/api/client'
import { API_ENDPOINTS } from '@/config/api.config'
import type { Comment } from '../types/pilgrim.types'

export const pilgrimsService = {
  getAll: async (): Promise<Comment[]> => {
    return apiClient.get(API_ENDPOINTS.COMMENTS)
  },

  getById: async (id: number): Promise<Comment> => {
    return apiClient.get(`${API_ENDPOINTS.USERS}/${id}`)
  },

  create: async (data: Partial<Comment>): Promise<Comment> => {
    return apiClient.post(API_ENDPOINTS.USERS, data)
  },

  update: async (id: number, data: Partial<Comment>): Promise<Comment> => {
    return apiClient.put(`${API_ENDPOINTS.USERS}/${id}`, data)
  },

  delete: async (id: number): Promise<void> => {
    return apiClient.delete(`${API_ENDPOINTS.USERS}/${id}`)
  },
}
