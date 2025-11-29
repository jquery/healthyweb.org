import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import astroPlugin from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['.astro', '.wrangler', 'dist', 'src/env.d.ts']
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs['flat/recommended'],
  ...astroPlugin.configs['flat/jsx-a11y-recommended'],
  {
    rules: {
      // Turns off rules that conflict with Prettier
      ...prettierConfig.rules,
      '@typescript-eslint/no-non-null-assertion': 'error'
    }
  }
]
