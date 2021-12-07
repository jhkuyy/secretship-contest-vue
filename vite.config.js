import path from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import babel from 'vite-babel-plugin'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    babel(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/**'),
    }),
  ],

  server: {
    port: 80,
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
