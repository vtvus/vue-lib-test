import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
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
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'VueLib',
      fileName: (format) => `vue-lib.${format}.js`
    },
    rollupOptions: {
      // Убедимся, что внешние зависимости не включены в бандл
      external: ['vue'],
      output: {
        // Предоставляем глобальные переменные для внешних зависимостей в UMD сборке
        globals: {
          vue: 'Vue'
        },
        // Генерируем отдельный CSS файл
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'vue-lib.css'
          }
          return assetInfo.name || 'assets/[name].[ext]'
        }
      }
    },
    // Включаем CSS в бандл
    cssCodeSplit: false,
    // Копируем ресурсы
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': './src'
    }
  }
})

