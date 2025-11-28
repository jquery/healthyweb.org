<script lang="ts">
  import Logo from './Logo.svelte'
  import URLForm from './URLForm.svelte'

  let {
    url = '',
    message,
    latest,
    version
  }: {
    url?: string
    message: string | undefined
    latest: string
    version: string | null
  } = $props()
</script>

<header
  class={[
    'relative flex shrink-0 flex-col items-center',
    'border-b-4 border-b-primary bg-cover bg-left',
    'px-5 pb-12 pt-[120px] lg:h-[400px]',
    version
      ? 'bg-linear-to-br from-background to-background-light'
      : 'bg-header'
  ].join(' ')}
>
  <URLForm {url} {message} {latest} bind:version />
  <Logo />
</header>
