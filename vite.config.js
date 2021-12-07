import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import babel from 'vite-babel-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    babel(),
  ],

  server: {
    port: 8080,
  },

  css: {
    preprocessorOptions: {
      stylus: {
        imports: [
          path.resolve(__dirname, './src/styles/colors.styl'),
        ],
      },
    },
  },
})
