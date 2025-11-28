import cloudflare from '@astrojs/cloudflare'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://healthyweb.org',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()]
  }
})
