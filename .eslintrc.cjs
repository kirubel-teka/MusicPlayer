const { rule } = require('postcss')
const { test, expect, vi, beforeEach, it } = require('vitest/dist/index.js')

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],

  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    },
    {
      files: ["src/components/__tests__/**.spec.js"],
      globals: {
        test: "readonly",
        describe: "readonly",
        expect: "readonly",
        vi: "readonly",
        beforeEach: "readonly",
        it: "readonly",
      },
    },
  
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
