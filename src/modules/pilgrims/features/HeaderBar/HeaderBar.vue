<script setup lang="ts">
import { BaseBreadcrumb, BaseButton } from '@/components/common'
import { useHeaderBar } from './HeaderBar.logic'

const { breadcrumbItems, addNew } = useHeaderBar()
</script>

<template>
  <div class="flex items-center justify-between">
    <BaseBreadcrumb :items="breadcrumbItems" />

    <BaseButton text="Add New" @click="addNew" />
  </div>
</template>
