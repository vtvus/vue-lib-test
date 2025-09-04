import { inject } from 'vue'
import { CProps } from '../constants/button'

export function useConstants() {
  const constants = inject('CProps', CProps)
  return {
    CProps: constants
  }
}