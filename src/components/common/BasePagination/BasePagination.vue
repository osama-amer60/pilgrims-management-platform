<template>
  <div :class="paginationWrapper">
    <!-- Pagination Controls -->
    <div :class="paginationControls">
      <!-- Previous Button -->
      <button
        :class="paginationButton"
        :disabled="!canGoPrevious"
        @click="goToPrevious"
      >
        <i class="bi bi-chevron-right"></i>
        <span>Prev</span>
      </button>

      <!-- Page Numbers -->
      <button
        v-for="(page, index) in visiblePages"
        :key="index"
        :class="getPageButtonClass(page)"
        :disabled="typeof page === 'string'"
        @click="typeof page === 'number' ? goToPage(page) : undefined"
      >
        {{ typeof page === 'number' ? page + 1 : page }}
      </button>

      <!-- Next Button -->
      <button
        :class="paginationButton"
        :disabled="!canGoNext"
        @click="goToNext"
      >
        <span>Next</span>
        <i class="bi bi-chevron-left"></i>
      </button>
    </div>

    <!-- Pagination Info -->
    <div :class="paginationInfo">
      <span>Display {{ startItem }} to {{ endItem }} of {{ props.totalItems }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useBasePagination } from './BasePagination.logic'
import type { BasePaginationProps, BasePaginationEmits } from './BasePagination.logic'

const props = withDefaults(defineProps<BasePaginationProps>(), {
  pageSizeOptions: () => [10, 25, 50, 100],
  showPageSizeSelector: true,
})

const emit = defineEmits<BasePaginationEmits>()

const {
  startItem,
  endItem,
  canGoPrevious,
  canGoNext,
  visiblePages,
  goToPage,
  goToPrevious,
  goToNext,
  getPageButtonClass,
  paginationWrapper,
  paginationInfo,
  paginationControls,
  paginationButton,
} = useBasePagination(props, emit)
</script>
