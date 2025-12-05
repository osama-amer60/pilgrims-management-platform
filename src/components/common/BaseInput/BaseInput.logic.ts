import { computed } from 'vue'
import { baseInputWrapper, baseInputNormal } from './BaseInput.styles'

export interface BaseInputProps {
  label?: string
  type?: string
  modelValue?: string | number
}

export const useBaseInput = (
  props: BaseInputProps,
  emit: (event: 'update:modelValue', value: string | number) => void,
) => {
  const model = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val ?? ''),
  })

  return {
    model,
    wrapperClasses: baseInputWrapper,
    normalClasses: baseInputNormal,
  }
}
