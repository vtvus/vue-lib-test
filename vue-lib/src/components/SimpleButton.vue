<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import { BUTTON_CONSTANTS } from '../constants/button'
import type { ButtonVariant, ButtonSize, SimpleButtonProps } from '../types/button'

export type { ButtonVariant, ButtonSize, SimpleButtonProps }

@Component({
  name: 'SimpleButton',
  emits: ['click']
})
export default class SimpleButton extends Vue {
  @Prop({
    default: BUTTON_CONSTANTS.variants.PRIMARY,
    type: String
  })
  readonly variant!: ButtonVariant

  @Prop({
    default: BUTTON_CONSTANTS.sizes.MEDIUM,
    type: String
  })
  readonly size!: ButtonSize

  @Prop({
    default: false,
    type: Boolean
  })
  readonly disabled!: boolean

  @Prop({
    default: '',
    type: String
  })
  readonly text!: string

  @Prop({
    default: false,
    type: Boolean
  })
  readonly outlined!: boolean

  @Prop({
    default: false,
    type: Boolean
  })
  readonly rounded!: boolean

  get classes(): (string | Record<string, boolean>)[] {
    return [
      'simple-button',
      `simple-button--${this.variant}`,
      `simple-button--${this.size}`,
      {
        'simple-button--outlined': this.outlined,
        'simple-button--rounded': this.rounded,
        'simple-button--disabled': this.disabled
      }
    ]
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/button-theme.scss';
</style>