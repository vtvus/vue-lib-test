import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Ensure esbuild uses the same TS decorator semantics as tsc
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
        verbatimModuleSyntax: false
      }
    }
  },
  resolve: {
    alias: {
      '@': './src'
    }
  }
})

