import { useQuery } from '@tanstack/vue-query'
import { fetchComments } from '../services'
import type { Comment } from '../types'

/**
 * Composable for fetching pilgrims/comments data using TanStack Query
 * Uses the global queryClient configuration from plugins/queryClient.ts
 */
export const usePilgrims = () => {
  return useQuery<Comment[]>({
    queryKey: ['pilgrims', 'comments'],
    queryFn: fetchComments,
  })
}
