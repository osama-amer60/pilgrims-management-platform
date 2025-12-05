<template>
  <button
    v-bind="$attrs"
    :type="props.type"
    :disabled="props.disabled"
    :class="[wrapperClasses, variantClasses, props.disabled && disabledClasses]"
  >
    <!-- Left icon -->
    <span v-if="$slots['icon-left']" class="flex items-center">
      <slot name="icon-left" />
    </span>

    <!-- Button text -->
    <span v-if="$slots.default || props.text" :class="textClasses">
      <slot>{{ props.text }}</slot>
    </span>

    <!-- Right icon -->
    <span v-if="$slots['icon-right']" class="flex items-center">
      <slot name="icon-right" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { useBaseButton } from './BaseButton.logic'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit' | 'reset'
    text?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    text: '',
    disabled: false,
  },
)

const { wrapperClasses, variantClasses, disabledClasses, textClasses } = useBaseButton(props)
</script>
