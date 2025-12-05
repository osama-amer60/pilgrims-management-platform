<template>
  <div :class="[wrapperClasses, cardClasses]" dir="rtl">
    <!-- Right Section: Title and Value -->
    <div :class="contentSectionClasses">
      <h3 v-if="props.title" :class="titleClasses">{{ props.title }}</h3>
      <div v-if="props.value !== undefined" :class="valueClasses">{{ props.value }}</div>
    </div>

    <!-- Left Section: Percentage and Timeframe -->
    <div :class="metricsSectionClasses">
      <div v-if="props.percentage !== undefined" :class="percentageWrapperClasses">
        <span :class="[percentageClasses, percentageColorClasses]">
          {{ formatPercentage(props.percentage) }}
        </span>
        <span v-if="showPercentageIcon" :class="iconClasses">
          <slot name="percentage-icon">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="percentageIconPath"
              />
            </svg>
          </slot>
        </span>
      </div>
      <div v-if="props.timeframe" :class="timeframeWrapperClasses">
        <span :class="timeframeClasses">{{ props.timeframe }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBaseCard } from './BaseCard.logic'

const props = withDefaults(
  defineProps<{
    title?: string
    value?: string | number
    percentage?: number
    timeframe?: string
    showPercentageIcon?: boolean
    showTimeframeIcon?: boolean
  }>(),
  {
    title: '',
    value: undefined,
    percentage: undefined,
    timeframe: '',
    showPercentageIcon: true,
    showTimeframeIcon: true,
  },
)

const {
  wrapperClasses,
  cardClasses,
  contentSectionClasses,
  titleClasses,
  valueClasses,
  metricsSectionClasses,
  percentageWrapperClasses,
  percentageClasses,
  percentageColorClasses,
  iconClasses,
  timeframeWrapperClasses,
  timeframeClasses,
  formatPercentage,
  percentageIconPath,
} = useBaseCard(props)
</script>
