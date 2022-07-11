import {ComponentOptions, DefineComponent} from 'vue';

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}