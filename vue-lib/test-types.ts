// Test file to verify TypeScript types are working correctly
import { SimpleButton, SimpleButtonProps, VueLibPlugin } from './dist/index';
import type { App } from 'vue';

// Test SimpleButtonProps interface
const buttonProps: SimpleButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Test Button',
  outlined: true,
  rounded: false
};

// Test that all variant options work
const variants: SimpleButtonProps['variant'][] = [
  'primary', 'secondary', 'success', 'danger', 'warning', 'info'
];

// Test that all size options work
const sizes: SimpleButtonProps['size'][] = [
  'small', 'medium', 'large'
];

// Test VueLibPlugin
const testApp = {} as App;
VueLibPlugin.install(testApp);

// Test that exports are available
console.log('SimpleButton:', SimpleButton);
console.log('Button props:', buttonProps);
console.log('Available variants:', variants);
console.log('Available sizes:', sizes);

export {};