<template>
  <RouterLink :to="props.to" :class="linkClasses" :active-class="activeClasses">
    <i :class="[iconClasses, props.icon]"></i>
    <span :class="labelClasses">{{ props.label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { useSidebarLink } from './SidebarLink.logic'

const props = defineProps<{
  icon: string
  label: string
  to: string
}>()

const { linkClasses, iconClasses, labelClasses, activeClasses } = useSidebarLink()
</script>
