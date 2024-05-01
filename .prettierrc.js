export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  endOfLine: 'auto',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-svelte',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte'
      }
    }
  ]
}
