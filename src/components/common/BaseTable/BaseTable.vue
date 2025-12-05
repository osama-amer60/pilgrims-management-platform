<template>
  <div :class="tableWrapper">
    <!-- Loading State -->
    <div v-if="props.loading" :class="loadingWrapper">
      <div :class="loadingSpinner"></div>
    </div>

    <!-- Empty State -->
    <div v-else-if="!props.data || props.data.length === 0" :class="emptyWrapper">
      <i :class="['bi bi-inbox', emptyIcon]"></i>
      <p :class="emptyText">{{ props.emptyMessage || 'No Data Found' }}</p>
    </div>

    <!-- Table -->
    <table v-else :class="table">
      <thead :class="tableHeader">
        <tr
          v-for="headerGroup in tableInstance.getHeaderGroups()"
          :key="headerGroup.id"
          :class="tableHeaderRow"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :class="tableHeaderCell"
            :style="{ width: header.getSize() !== 150 ? `${header.getSize()}px` : 'auto' }"
          >
            <div
              v-if="!header.isPlaceholder"
            >
              <template v-if="typeof header.column.columnDef.header === 'function'">
                <template v-if="typeof header.column.columnDef.header(header.getContext()) === 'string'">
                  {{ header.column.columnDef.header(header.getContext()) }}
                </template>
                <component
                  v-else
                  :is="header.column.columnDef.header(header.getContext())"
                />
              </template>
              <template v-else>
                {{ header.column.columnDef.header }}
              </template>
            </div>
          </th>
        </tr>
      </thead>
      <tbody :class="tableBody">
        <tr v-for="row in tableInstance.getRowModel().rows" :key="row.id" :class="rowClasses">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id" :class="tableCell">
            <template v-if="typeof cell.column.columnDef.cell === 'function'">
              <template
                v-if="
                  typeof cell.column.columnDef.cell(cell.getContext()) === 'string' ||
                  typeof cell.column.columnDef.cell(cell.getContext()) === 'number'
                "
              >
                <span v-html="cell.column.columnDef.cell(cell.getContext())"></span>
              </template>
              <component v-else :is="cell.column.columnDef.cell(cell.getContext())" />
            </template>
            <template v-else>
              {{ cell.column.columnDef.cell }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="TData">
import { useBaseTable } from './BaseTable.logic'
import type { BaseTableProps } from './BaseTable.types'

const props = withDefaults(defineProps<BaseTableProps<TData>>(), {
  loading: false,
  emptyMessage: 'No Data Found',
  striped: false,
  hoverable: true,
})

const {
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
} = useBaseTable(props)
</script>
