import { API_CONFIG, API_ENDPOINTS } from '@/config/api.config'
import type { Comment } from '../types/pilgrim.types'

// Fetch comments from API
export const fetchComments = async (): Promise<Comment[]> => {
  const response = await fetch(`${API_CONFIG.JSON_PLACEHOLDER_BASE_URL}${API_ENDPOINTS.COMMENTS}`)
  if (!response.ok) {
    throw new Error('Failed to fetch comments')
  }
  return response.json()
}
