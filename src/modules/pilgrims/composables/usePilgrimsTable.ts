import { computed, ref, type Ref } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Comment } from '../types'

/**
 * Composable for managing pilgrims table state and pagination
 */
export const usePilgrimsTable = (data: Ref<Comment[] | undefined>) => {
  // Pagination state
  const currentPage = ref(0)
  const pageSize = ref(10)

  // Calculate total pages
  const totalPages = computed(() => {
    if (!data.value) return 0
    return Math.ceil(data.value.length / pageSize.value)
  })

  // Table columns configuration
  const columns: ColumnDef<Comment>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 80,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      size: 250,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      size: 200,
    },
    {
      accessorKey: 'body',
      header: 'Comment',
      cell: (info) => {
        const value = info.getValue() as string
        return value.length > 100 ? `${value.substring(0, 100)}...` : value
      },
    },
  ]

  // Computed property for paginated data
  const paginatedData = computed(() => {
    if (!data.value) return []
    const start = currentPage.value * pageSize.value
    const end = start + pageSize.value
    return data.value.slice(start, end)
  })

  // Handle page change
  const handlePageChange = (page: number) => {
    currentPage.value = page
  }

  return {
    columns,
    paginatedData,
    currentPage,
    pageSize,
    totalPages,
    handlePageChange,
  }
}
