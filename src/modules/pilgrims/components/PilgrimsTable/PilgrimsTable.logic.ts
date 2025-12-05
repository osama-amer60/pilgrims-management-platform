import { toRef } from 'vue'
import { usePilgrimsTable } from '../../composables/index.ts'
import type { Comment } from '../../types/index.ts'
import { pilgrimsTableWrapper } from './PilgrimsTable.styles.ts'

export interface PilgrimsTableProps {
  data?: Comment[]
  loading?: boolean
  error?: Error | null
}

export const usePilgrimsTableComponent = (props: PilgrimsTableProps) => {
  // Convert props.data to a ref for reactivity
  const dataRef = toRef(() => props.data)

  // Use the table composable with reactive data
  const { columns, paginatedData, currentPage, pageSize, totalPages } = usePilgrimsTable(dataRef)

  // Compute empty message based on error state
  const emptyMessage = props.error ? 'Failed to load data' : 'No pilgrims found'

  return {
    columns,
    paginatedData,
    currentPage,
    pageSize,
    totalPages,
    emptyMessage,
    pilgrimsTableWrapper,
  }
}
