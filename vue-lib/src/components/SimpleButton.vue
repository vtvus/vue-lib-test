<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface SimpleButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  text?: string
  outlined?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<SimpleButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  text: '',
  outlined: false,
  rounded: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'simple-button',
  `simple-button--${props.variant}`,
  `simple-button--${props.size}`,
  {
    'simple-button--outlined': props.outlined,
    'simple-button--rounded': props.rounded,
    'simple-button--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss">
@import '../styles/button-theme.scss';
</style>