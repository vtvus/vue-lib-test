import { defineComponent } from 'vue'

export interface XButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  text?: string
  outlined?: boolean
  rounded?: boolean
}

export default defineComponent({
  name: 'XButton',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''cd 
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  render() {
    return (
      <button
        class={[
          'simple-button',
          `simple-button--${this.variant}`,
          `simple-button--${this.size}`,
          {
            'simple-button--outlined': this.outlined,
            'simple-button--rounded': this.rounded,
            'simple-button--disabled': this.disabled
          }
        ]}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        <div>{this.text}</div>
      </button>
    )
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }
  }
});


