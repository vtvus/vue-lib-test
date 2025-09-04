// Экспорт компонентов
export { default as SimpleButton } from './components/SimpleButton.vue'

// Экспорт типов
export type { SimpleButtonProps } from './components/SimpleButton.vue'

// Стили включены в компоненты

// Экспорт ресурсов
export { default as IconCheck } from './assets/icon-check.svg'
export { default as IconArrow } from './assets/icon-arrow.svg'

// Плагин для Vue
import type { App } from 'vue'
import SimpleButton from './components/SimpleButton.vue'

export const VueLibPlugin = {
  install(app: App) {
    app.component('SimpleButton', SimpleButton)
  }
}

// Экспорт по умолчанию для удобства
export default VueLibPlugin