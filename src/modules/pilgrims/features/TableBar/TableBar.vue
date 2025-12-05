<script setup lang="ts">
import { BaseButton, BaseInput } from '@/components/common/'
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <div>
      <BaseInput placeholder="Search" />
    </div>
    <div class="flex items-center gap-2">
      <BaseButton text="import" variant="secondary" />
      <BaseButton text="export" variant="secondary" />
    </div>
  </div>
</template>
