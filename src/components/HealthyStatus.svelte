<script lang="ts">
  import checkmarkImg from '../images/checkmark.svg'
  import { healthy } from '../strings.js'
</script>

<div
  class="flex size-20 shrink-0 items-center justify-center rounded-full bg-success text-8xl leading-none drop-shadow-none"
>
  <img
    aria-hidden="true"
    alt=""
    src={checkmarkImg.src}
    width="60"
    height="60"
  />
</div>
<h1>{healthy.header}</h1>
<h3>{healthy.subheader}</h3>
<p>
  {healthy.message}<br />
  <a
    class="link-primary underline underline-offset-4"
    href="https://jquery.com/download"
  >
    Check out our resources to keep your site up to date.
  </a>
</p>
