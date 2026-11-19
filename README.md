# healthyweb.org

This is the source code for healthyweb.org. It is built using [Astro](https://astro.build/), [Svelte](https://svelte.dev), and [TypeScript](https://www.typescriptlang.org).

This site is a [Workers project](https://developers.cloudflare.com/workers/) hosted on [Cloudflare](https://www.cloudflare.com/).

It works in conjunction with the [healthyweb worker](https://github.com/jquery/healthyweb-worker), a separate Workers project that the site calls through a [service binding](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/).

The worker uses [Puppeteer](https://pptr.dev) to load the page and find the jQuery version.

## Development

1. Install dependencies

```bash
npm install
```

2. Start the [healthyweb worker](https://github.com/jquery/healthyweb-worker) with `npm start` in its own checkout. In development, the site sends checks to it at `http://localhost:8787` instead of using the service binding.

3. Start the development server

```bash
npm start
```

## Deployment

Every push to `main` is tested, built, and deployed to Cloudflare by the [deploy workflow](.github/workflows/deploy.yml).

The latest jQuery version that sites are compared against is `LATEST_JQUERY_VERSION` in [wrangler.toml](wrangler.toml).
