import { computed } from 'vue'
import {
  paginationWrapper,
  paginationInfo,
  paginationControls,
  paginationButton,
  paginationButtonActive,
  paginationPageButton,
} from './BasePagination.styles'

export interface BasePaginationProps {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  pageSizeOptions?: number[]
  showPageSizeSelector?: boolean
}

export interface BasePaginationEmits {
  (e: 'update:currentPage', value: number): void
  (e: 'update:pageSize', value: number): void
}

export const useBasePagination = (props: BasePaginationProps, emit: BasePaginationEmits) => {
  const startItem = computed(() => {
    return props.currentPage * props.pageSize + 1
  })

  const endItem = computed(() => {
    return Math.min((props.currentPage + 1) * props.pageSize, props.totalItems)
  })

  const canGoPrevious = computed(() => props.currentPage > 0)
  const canGoNext = computed(() => props.currentPage < props.totalPages - 1)

  const visiblePages = computed(() => {
    const pages: (number | string)[] = []
    const maxVisible = 5
    const halfVisible = Math.floor(maxVisible / 2)

    let startPage = Math.max(0, props.currentPage - halfVisible)
    let endPage = Math.min(props.totalPages - 1, props.currentPage + halfVisible)

    // Adjust if we're near the start or end
    if (props.currentPage < halfVisible) {
      endPage = Math.min(props.totalPages - 1, maxVisible - 1)
    }
    if (props.currentPage > props.totalPages - halfVisible - 1) {
      startPage = Math.max(0, props.totalPages - maxVisible)
    }

    // Add first page and ellipsis if needed
    if (startPage > 0) {
      pages.push(0)
      if (startPage > 1) {
        pages.push('...')
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Add ellipsis and last page if needed
    if (endPage < props.totalPages - 1) {
      if (endPage < props.totalPages - 2) {
        pages.push('...')
      }
      pages.push(props.totalPages - 1)
    }

    return pages
  })

  const goToPage = (page: number) => {
    if (page >= 0 && page < props.totalPages) {
      emit('update:currentPage', page)
    }
  }

  const goToPrevious = () => {
    if (canGoPrevious.value) {
      emit('update:currentPage', props.currentPage - 1)
    }
  }

  const goToNext = () => {
    if (canGoNext.value) {
      emit('update:currentPage', props.currentPage + 1)
    }
  }

  const getPageButtonClass = (page: number | string) => {
    if (typeof page === 'string') {
      return paginationPageButton
    }
    return page === props.currentPage
      ? `${paginationPageButton} ${paginationButtonActive}`
      : paginationPageButton
  }

  return {
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
  }
}
