import { usePilgrims } from '../composables'

export const usePilgrimsView = () => {
  // Fetch data using TanStack Query (uses existing queryClient plugin)
  const { data, isLoading, error } = usePilgrims()

  return {
    data,
    isLoading,
    error,
  }
}
