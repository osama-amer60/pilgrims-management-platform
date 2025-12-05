import { computed } from 'vue'
import {
  baseCardWrapper,
  baseCardCard,
  baseCardContentSection,
  baseCardTitle,
  baseCardValue,
  baseCardMetricsSection,
  baseCardPercentageWrapper,
  baseCardPercentage,
  baseCardPercentagePositive,
  baseCardPercentageNegative,
  baseCardIcon,
  baseCardTimeframeWrapper,
  baseCardTimeframe,
} from './BaseCard.styles'

export interface BaseCardProps {
  title?: string
  value?: string | number
  percentage?: number
  timeframe?: string
  showPercentageIcon?: boolean
  showTimeframeIcon?: boolean
}

export const useBaseCard = (props: BaseCardProps) => {
  const percentageColorClasses = computed(() => {
    if (props.percentage === undefined) return ''
    return props.percentage >= 0 ? baseCardPercentagePositive : baseCardPercentageNegative
  })

  const percentageIconPath = computed(() => {
    if (props.percentage === undefined) return ''
    return props.percentage >= 0 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'
  })

  const formatPercentage = (value: number | undefined): string => {
    if (value === undefined) return ''
    const sign = value >= 0 ? '+' : ''
    return `${sign}${value.toFixed(2)}%`
  }

  return {
    wrapperClasses: baseCardWrapper,
    cardClasses: baseCardCard,
    contentSectionClasses: baseCardContentSection,
    titleClasses: baseCardTitle,
    valueClasses: baseCardValue,
    metricsSectionClasses: baseCardMetricsSection,
    percentageWrapperClasses: baseCardPercentageWrapper,
    percentageClasses: baseCardPercentage,
    percentageColorClasses,
    iconClasses: baseCardIcon,
    timeframeWrapperClasses: baseCardTimeframeWrapper,
    timeframeClasses: baseCardTimeframe,
    formatPercentage,
    percentageIconPath,
  }
}
