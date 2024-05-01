/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type BrowserWorker = import('@cloudflare/workers-types').BrowserWorker
type ENV = {
  BROWSER: BrowserWorker
}

type Runtime = import('@astrojs/cloudflare').Runtime<ENV>

declare namespace App {
  interface Locals extends Runtime {}
}
