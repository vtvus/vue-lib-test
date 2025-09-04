export const BUTTON_CONSTANTS = {
  variants: {
    PRIMARY: 'primary' as const,
    SECONDARY: 'secondary' as const,
    SUCCESS: 'success' as const,
    DANGER: 'danger' as const,
    WARNING: 'warning' as const,
    INFO: 'info' as const
  },
  sizes: {
    SMALL: 'small' as const,
    MEDIUM: 'medium' as const,
    LARGE: 'large' as const
  }
} as const

export type ButtonVariant = typeof BUTTON_CONSTANTS.variants[keyof typeof BUTTON_CONSTANTS.variants]
export type ButtonSize = typeof BUTTON_CONSTANTS.sizes[keyof typeof BUTTON_CONSTANTS.sizes]

// Create CProps namespace for template usage
export const CProps = {
  ButtonVariants: BUTTON_CONSTANTS.variants,
  ButtonSizes: BUTTON_CONSTANTS.sizes
} as const