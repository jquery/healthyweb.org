<script lang="ts">
  import openjsLogo from '../images/openjs-logo.svg'
  import { index } from '../strings.js'
</script>

<footer
  class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-5 pt-12 pb-20 text-center lg:flex-row lg:text-left"
>
  <img
    alt="OpenJS Foundation Logo"
    src={openjsLogo.src}
    width={openjsLogo.width}
    height={openjsLogo.height}
  />
  <p class="text-lg lg:text-xl">
    {index.footer}
    <a class="link-primary" href="https://openjsf.org/">
      Learn more about OpenJS Foundation.
    </a>
  </p>
</footer>
