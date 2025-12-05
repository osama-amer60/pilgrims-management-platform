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
import { usePilgrimsView } from './PilgrimsView.logic'

const { data, isLoading, error } = usePilgrimsView()
</script>
