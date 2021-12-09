import path from 'path'

import { defineConfig } from 'vite'
import vitePluginEslint from 'vite-plugin-eslint'
import vitePluginVue from '@vitejs/plugin-vue'
import vitePluginBabel from 'vite-babel-plugin'
import vitePluginVueI18n from '@intlify/vite-plugin-vue-i18n'
import viteSvgIcons from 'vite-plugin-svg-icons'

const isDev = process.env.NODE_ENV === 'development'

// default:
//  https://github.com/madyankin/postcss-modules/blob/master/src/generateScopedName.js
function generateRichClassName(name, filename) {
  // const hash = crypto.createHash('sha1').update(css).digest('hex').slice(0, 6)
  const { groups: { fileName } } = /(?<fileName>\w+)(\.\w+)*(\.\w+)(\?.+)?$/.exec(filename)
  return `${fileName}_${name}`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginVue(),
    vitePluginEslint(),
    vitePluginBabel(),
    vitePluginVueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/**'),
    }),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/images/sprite')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],

  server: {
    port: 80,
  },

  base: '/secretship-contest-vue/',
  build: {
    outDir: './docs',
  },

  css: {
    modules: {
      generateScopedName: isDev ? generateRichClassName : undefined,
    },

    preprocessorOptions: {
      stylus: {
        imports: [
          path.resolve(__dirname, './src/styles/colors.styl'),
        ],
      },
    },
  },
})
