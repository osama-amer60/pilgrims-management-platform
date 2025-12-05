<template>
  <div :class="pilgrimsTableWrapper">
    <!-- Table Component -->
    <BaseTable
      :data="paginatedData"
      :columns="columns"
      :loading="loading"
      :empty-message="emptyMessage"
      :hoverable="true"
      :striped="true"
    />

    <!-- Pagination Component -->
    <BasePagination
      v-if="data && data.length > 0"
      v-model:current-page="currentPage"
      :total-pages="totalPages"
      :page-size="pageSize"
      :total-items="data.length"
    />
  </div>
</template>

<script setup lang="ts">
import { BaseTable, BasePagination } from '@/components/common/index'
import { usePilgrimsTableComponent } from './PilgrimsTable.logic'
import type { PilgrimsTableProps } from './PilgrimsTable.logic'

const props = withDefaults(defineProps<PilgrimsTableProps>(), {
  loading: false,
  error: null,
})

const {
  columns,
  paginatedData,
  currentPage,
  pageSize,
  totalPages,
  emptyMessage,
  pilgrimsTableWrapper,
} = usePilgrimsTableComponent(props)
</script>
