<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <BaseCard title="نقاط التجمع" :value="61" :percentage="10" timeframe="From last week" />
    <BaseCard title="نقاط التجمع" :value="61" :percentage="-3.85" timeframe="From last week" />
    <BaseCard title="نقاط التجمع" :value="61" :percentage="5" timeframe="From last week" />
    <BaseCard title="نقاط التجمع" :value="61" :percentage="-3.85" timeframe="From last week" />
  </div>
</template>

<script setup lang="ts">
import { BaseCard } from '@/components/common'
</script>
