import { computed, ref } from 'vue'
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type ColumnFiltersState,
} from '@tanstack/vue-table'
import type { BaseTableProps } from './BaseTable.types'
import {
  tableWrapper,
  table,
  tableHeader,
  tableHeaderRow,
  tableHeaderCell,
  tableBody,
  tableRow,
  tableRowStriped,
  tableCell,
  loadingWrapper,
  loadingSpinner,
  emptyWrapper,
  emptyIcon,
  emptyText,
} from './BaseTable.styles'

export const useBaseTable = <TData>(props: BaseTableProps<TData>) => {
  const columnFilters = ref<ColumnFiltersState>([])

  const tableInstance = useVueTable({
    get data() {
      return props.data
    },
    get columns() {
      return props.columns
    },
    state: {
      get columnFilters() {
        return columnFilters.value
      },
    },

    onColumnFiltersChange: (updaterOrValue) => {
      columnFilters.value =
        typeof updaterOrValue === 'function'
          ? updaterOrValue(columnFilters.value)
          : updaterOrValue
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const rowClasses = computed(() => {
    const classes = [tableRow]
    if (props.striped) {
      classes.push(tableRowStriped)
    }
    return classes.join(' ')
  })

  return {
    tableInstance,
    tableWrapper,
    table,
    tableHeader,
    tableHeaderRow,
    tableHeaderCell,
    tableBody,
    rowClasses,
    tableCell,
    loadingWrapper,
    loadingSpinner,
    emptyWrapper,
    emptyIcon,
    emptyText,
  }
}
