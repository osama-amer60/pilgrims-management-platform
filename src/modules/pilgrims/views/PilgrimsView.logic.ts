import { useQuery } from '@tanstack/vue-query'
import { fetchComments } from '../services'
import type { Comment } from '../types'

/**
 * Composable for managing the Pilgrims view state
 * Fetches pilgrims/comments data using TanStack Query
 */
export const usePilgrimsView = () => {
  // Fetch data using TanStack Query (uses existing queryClient plugin)
  const { data, isLoading, error } = useQuery<Comment[]>({
    queryKey: ['pilgrims', 'comments'],
    queryFn: fetchComments,
  })

  return {
    data,
    isLoading,
    error,
  }
}
