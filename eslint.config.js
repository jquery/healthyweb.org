import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import astroPlugin from 'eslint-plugin-astro'
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['.astro', 'dist', 'src/env.d.ts']
  },
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended
  ),
  ...astroPlugin.configs['flat/recommended'],
  ...astroPlugin.configs['flat/jsx-a11y-recommended'],
  {
    plugins: { tailwindcss: tailwindPlugin },
    rules: {
      // Turns off rules that conflict with Prettier
      ...prettierConfig.rules,
      '@typescript-eslint/no-non-null-assertion': 'error',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-contradicting-classname': 'error'
    }
  }
]
