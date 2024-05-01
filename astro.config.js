import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

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
  integrations: [tailwind(), svelte()]
})
