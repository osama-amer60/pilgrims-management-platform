import type { ColumnDef } from '@tanstack/vue-table'

export interface BaseTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  loading?: boolean
  emptyMessage?: string
  striped?: boolean
  hoverable?: boolean
}

export interface TableState {
  columnFilters: any[]
  pagination: {
    pageIndex: number
    pageSize: number
  }
}
