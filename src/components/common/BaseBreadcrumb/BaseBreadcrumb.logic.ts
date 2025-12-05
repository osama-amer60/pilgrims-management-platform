import {
  baseBreadcrumbWrapper,
  baseBreadcrumbList,
  baseBreadcrumbItem,
  baseBreadcrumbLink,
  baseBreadcrumbText,
  baseBreadcrumbSeparator,
  baseBreadcrumbLastItem,
} from './BaseBreadcrumb.styles'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export const useBaseBreadcrumb = () => {
  return {
    wrapperClasses: baseBreadcrumbWrapper,
    listClasses: baseBreadcrumbList,
    itemClasses: baseBreadcrumbItem,
    linkClasses: baseBreadcrumbLink,
    textClasses: baseBreadcrumbText,
    separatorClasses: baseBreadcrumbSeparator,
    lastItemClasses: baseBreadcrumbLastItem,
  }
}
