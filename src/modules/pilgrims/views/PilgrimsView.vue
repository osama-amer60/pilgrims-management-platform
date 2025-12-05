<template>
  <div>
    <div class="space-y-6">
      <BaseBreadcrumb :items="breadcrumbItems" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <BaseCard title="نقاط التجمع" :value="61" :percentage="10" timeframe="From last week" />
        <BaseCard title="نقاط التجمع" :value="61" :percentage="-3.85" timeframe="From last week" />
        <BaseCard title="نقاط التجمع" :value="61" :percentage="5" timeframe="From last week" />
        <BaseCard title="نقاط التجمع" :value="61" :percentage="-3.85" timeframe="From last week" />
      </div>
    </div>

    <!-- Table Component -->
    <PilgrimsTable :data="data" :loading="isLoading" :error="error" />
  </div>
</template>

<script setup lang="ts">
import { PilgrimsTable } from '../components'
import { usePilgrimsView } from './PilgrimsView.logic'
import { BaseBreadcrumb, BaseCard } from '@/components/common'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Activities', href: '/activities' },
  { label: 'Hajj System', href: '/hajj-system' },
  { label: 'Operations' },
]
const { data, isLoading, error } = usePilgrimsView()
</script>
