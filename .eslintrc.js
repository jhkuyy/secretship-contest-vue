const errorIfProd = process.env.NODE_ENV === 'production' ? 'error' : 'warn'

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],

  rules: {
    'no-unused-vars': errorIfProd,
    'no-debugger': errorIfProd,
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],

    'vue/attribute-hyphenation': [errorIfProd, 'never'],
    'vue/v-on-event-hyphenation': [errorIfProd, 'never'],
  },
}
