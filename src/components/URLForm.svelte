<script lang="ts">
  import loadingImg from '../images/loading.svg'
  import { index } from '../strings.js'
  import HealthyStatus from './HealthyStatus.svelte'
  import UnhealthyStatus from './UnhealthyStatus.svelte'

  let {
    url = $bindable(''),
    message = $bindable(undefined),
    version = $bindable(''),
    latest
  }: {
    url?: string
    message?: string | undefined
    version?: string | null
    latest: string
  } = $props()

  const action = '/api/detect'
  const method = 'POST'

  let submitting = $state(false)
  let invalid = $state(version === null || !!message)

  async function submit() {
    if (!url) {
      invalid = true
      return
    }

    // Reset states
    submitting = true
    invalid = false
    message = version = ''

    try {
      const res = await fetch(action, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })
      if (res.ok) {
        const json: { message: string; version: string } = await res.json()
        message = json.message
        version = json.version
      } else {
        try {
          const json: { message: string } = await res.json()
          message = json.message
        } catch (e) {
          message = res.statusText
        }
      }

      // Scroll to top when complete
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error(error)
      message = 'Error communicating with server. Please refresh and try again.'
    } finally {
      submitting = false
    }
  }
</script>

{#if version}
  <div
    class="flex max-w-5xl flex-col items-center justify-center gap-5 text-center lg:-mt-20"
  >
    {#if version === latest}
      <HealthyStatus />
    {:else}
      <UnhealthyStatus />
    {/if}
  </div>
{:else}
  <form
    {action}
    {method}
    class="flex w-full flex-col items-center justify-center gap-12"
    novalidate
    onsubmit={(e) => {
      e.preventDefault()
      submit()
    }}
  >
    <h1 class="max-w-5xl text-center drop-shadow-md">
      {index.header}
    </h1>
    <div class="flex w-full max-w-screen-sm flex-row">
      <input
        required
        aria-label="Enter Website URL"
        bind:value={url}
        class={[
          'input rounded-l-xl rounded-r-none px-5',
          invalid ? 'bg-red-100' : ''
        ].join(' ')}
        disabled={submitting}
        name="url"
        id="url"
        placeholder="https://"
        type="url"
        onpaste={(e) => {
          const value = e.clipboardData?.getData('text')
          if (value) {
            url = value
            submit()
          }
        }}
      />
      <button
        type="submit"
        class="btn btn-primary h-input rounded-l-none rounded-r-xl px-4 uppercase"
        data-submitting={submitting}
        disabled={submitting}
      >
        <img
          alt=""
          class={['absolute', submitting ? '' : 'hidden'].join(' ')}
          src={loadingImg.src}
          width={18}
          height={18}
        />
        <span class={submitting ? 'invisible' : ''}>Check Now</span>
      </button>
    </div>
  </form>
  {#if message || version === null}
    <p
      class="relative mt-2 w-full max-w-screen-sm px-5 text-center lg:text-left"
    >
      {message || 'No jQuery version detected. Please try another URL.'}
    </p>
  {/if}
{/if}
