import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { pilgrimsService } from '../services/pilgrimsService'
import type { Comment } from '../types/pilgrim.types'

export const pilgrimsKeys = {
  all: ['pilgrims'] as const,
  lists: () => [...pilgrimsKeys.all, 'list'] as const,
  list: (filters: string) => [...pilgrimsKeys.lists(), { filters }] as const,
  details: () => [...pilgrimsKeys.all, 'detail'] as const,
  detail: (id: number) => [...pilgrimsKeys.details(), id] as const,
}

export function usePilgrims() {
  return useQuery({
    queryKey: pilgrimsKeys.lists(),
    queryFn: pilgrimsService.getAll,
  })
}
export function usePilgrim(id: number) {
  return useQuery({
    queryKey: pilgrimsKeys.detail(id),
    queryFn: () => pilgrimsService.getById(id),
    enabled: !!id,
  })
}

export function useCreatePilgrim() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: pilgrimsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: pilgrimsKeys.lists() })
    },
  })
}

export function useUpdatePilgrim() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Comment> }) =>
      pilgrimsService.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: pilgrimsKeys.detail(variables.id) })
      queryClient.invalidateQueries({ queryKey: pilgrimsKeys.lists() })
    },
  })
}

export function useDeletePilgrim() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: pilgrimsService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: pilgrimsKeys.lists() })
    },
  })
}
