<script lang="ts">
  import openjsLogo from '../images/openjs-logo.svg'
  import { index } from '../strings'
</script>

<footer
  class="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-8 px-5 pb-20 pt-12 text-center lg:flex-row lg:text-left"
>
  <img
    alt="OpenJS Foundation Logo"
    src={openjsLogo.src}
    width={openjsLogo.width}
    height={openjsLogo.height}
  />
  <p class="text-lg lg:text-xl">
    {index.footer}
    <a class="link-primary" href="https://openjsf.org/"
      >Learn more about OpenJS Foundation.</a
    >
  </p>
</footer>
