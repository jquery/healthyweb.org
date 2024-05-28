# healthyweb.org

This is the source code for healthyweb.org. It is built using [Astro](https://astro.build/), [Svelte](https://svelte.dev), and [TypeScript](https://www.typescriptlang.org).

This site is a [Pages project](https://developers.cloudflare.com/pages/) hosted on [Cloudflare](https://www.cloudflare.com/).

It works in conjunction with the [healthyweb worker](https://github.com/jquery/healthyweb-worker), a [Workers project](https://developers.cloudflare.com/workers/) that is also hosted on Cloudflare.

The worker uses [Puppeteer](https://pptr.dev) to load the page and find the jQuery version.
