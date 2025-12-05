<template>
  <div class="flex flex-col space-y-10">
    <HeaderBar />

    <StatisticCards />

    <TableBar />

    <PilgrimsTable :data="data" :loading="isLoading" :error="error" />
  </div>
</template>

<script setup lang="ts">
import { HeaderBar, PilgrimsTable, StatisticCards, TableBar } from '../features/index'
import { usePilgrims } from '../composables'

const { data, isLoading, error } = usePilgrims()
</script>
