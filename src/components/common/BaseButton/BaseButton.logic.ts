import { computed } from 'vue'
import {
  baseButtonWrapper,
  baseButtonPrimary,
  baseButtonSecondary,
  baseButtonDisabled,
  baseButtonTextPrimary,
  baseButtonTextSecondary,
} from './BaseButton.styles'

export interface BaseButtonProps {
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  text?: string
  disabled?: boolean
}

export const useBaseButton = (props: BaseButtonProps) => {
  const variantClasses = computed(() => {
    return props.variant === 'primary' ? baseButtonPrimary : baseButtonSecondary
  })

  const textClasses = computed(() => {
    return props.variant === 'primary' ? baseButtonTextPrimary : baseButtonTextSecondary
  })

  return {
    wrapperClasses: baseButtonWrapper,
    variantClasses,
    disabledClasses: baseButtonDisabled,
    textClasses,
  }
}
