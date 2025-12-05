<template>
  <nav :class="wrapperClasses" aria-label="Breadcrumb">
    <ol :class="listClasses">
      <li v-for="(item, index) in props.items" :key="index" :class="itemClasses">
        <component
          :is="item.href ? 'a' : 'span'"
          :href="item.href"
          :class="[
            linkClasses,
            !item.href && textClasses,
            index === props.items.length - 1 && lastItemClasses,
          ]"
        >
          {{ item.label }}
        </component>
        <span v-if="index < props.items.length - 1" :class="separatorClasses" aria-hidden="true">
          {{ separator }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useBaseBreadcrumb, type BreadcrumbItem } from './BaseBreadcrumb.logic'

const props = withDefaults(
  defineProps<{
    items: BreadcrumbItem[]
    separator?: string
  }>(),
  {
    separator: '>',
  },
)

const {
  wrapperClasses,
  listClasses,
  itemClasses,
  linkClasses,
  textClasses,
  separatorClasses,
  lastItemClasses,
} = useBaseBreadcrumb()
</script>
