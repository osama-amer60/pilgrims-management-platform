<template>
  <div class="w-full space-y-1.5">
    <!-- Label -->
    <label v-if="props.label" class="text-sm font-medium text-gray-700">
      {{ props.label }}
    </label>

    <div :class="[wrapperClasses, normalClasses]">
      <!-- Left icon -->
      <span v-if="$slots['icon-left']" class="pl-3 text-gray-400">
        <slot name="icon-left" />
      </span>

      <!-- Input -->
      <input
        v-bind="$attrs"
        :type="props.type"
        class="w-full bg-transparent outline-none px-3 py-2.5 text-gray-700 placeholder-gray-400"
        v-model="model"
      />

      <!-- Right icon -->
      <span v-if="$slots['icon-right']" class="pr-3 text-gray-400">
        <slot name="icon-right" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBaseInput } from './BaseInput.logic'

const props = withDefaults(
  defineProps<{
    label?: string
    type?: string
    modelValue?: string | number
  }>(),
  {
    type: 'text',
    modelValue: '',
    label: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const { model, wrapperClasses, normalClasses } = useBaseInput(props, emit)
</script>
