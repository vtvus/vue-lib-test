import type { App } from 'vue'
import { CProps } from '../constants/button'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $CProps: typeof CProps
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$CProps = CProps
    app.provide('CProps', CProps)
  }
}