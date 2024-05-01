<script lang="ts">
  import Logo from './Logo.svelte'
  import URLForm from './URLForm.svelte'

  export let url = ''
  export let message: string | undefined

  export let latest: string
  export let version: string | null
</script>

<header
  class={[
    'relative flex shrink-0 flex-col items-center',
    'border-b-4 border-b-primary bg-cover bg-left',
    'px-5 pb-12 pt-[120px] lg:h-[400px]',
    version
      ? 'bg-gradient-to-br from-background to-background-light'
      : 'bg-header'
  ].join(' ')}
>
  <URLForm {url} {message} {latest} bind:version />
  <Logo />
</header>
