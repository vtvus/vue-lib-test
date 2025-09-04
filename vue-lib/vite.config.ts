import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts','src/**/*.tsx', 'src/**/*.vue','src/**/*.svg'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/demo.vue', 'src/App.vue'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.lib.json',
      copyDtsFiles: false
    })
  ],
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
      '@': path.resolve(__dirname, 'src')
    }
  }
})

