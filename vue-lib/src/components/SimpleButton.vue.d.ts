import type { DefineComponent } from 'vue'
import type { ButtonVariant, ButtonSize } from '../types/button'

declare const SimpleButton: DefineComponent<{
  variant: {
    type: ButtonVariant
    default: 'primary'
  }
  size: {
    type: ButtonSize
    default: 'medium'
  }
  disabled: {
    type: boolean
    default: false
  }
  text: {
    type: string
    default: ''
  }
  outlined: {
    type: boolean
    default: false
  }
  rounded: {
    type: boolean
    default: false
  }
}, {}, {}, {}, {}, {}, {}, {
  click: (event: MouseEvent) => void
}>

export default SimpleButton