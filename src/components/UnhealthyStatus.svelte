<script lang="ts">
  import cross from '../images/cross.svg'
  import { unhealthy } from '../strings.js'
</script>

<div
  class="flex size-20 shrink-0 items-center justify-center rounded-full bg-error text-8xl leading-none drop-shadow-none"
>
  <img aria-hidden="true" alt="" src={cross.src} width="60" height="60" />
</div>
<h1>{unhealthy.header}</h1>
<h3>{unhealthy.subheader}</h3>
<p>
  {unhealthy.message} <br />
  <a
    class="link-primary underline underline-offset-4"
    href="https://jquery.com/download"
  >
    Upgrading is easy — check out our resources to learn how.
  </a>
</p>
