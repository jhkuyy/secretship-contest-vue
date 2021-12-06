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
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],

  rules: {
    'no-unused-vars': 'warn',
    'no-restricted-syntax': 'off',
    'no-debugger': process.env.ENV === 'production' ? 'error' : 'warn',
    semi: 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { packageDir: './' },
    ],
  },
};
