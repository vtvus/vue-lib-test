import type { BUTTON_CONSTANTS } from '../constants/button'

export type ButtonVariant = typeof BUTTON_CONSTANTS.variants[keyof typeof BUTTON_CONSTANTS.variants]
export type ButtonSize = typeof BUTTON_CONSTANTS.sizes[keyof typeof BUTTON_CONSTANTS.sizes]

export interface SimpleButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  text?: string
  outlined?: boolean
  rounded?: boolean
}