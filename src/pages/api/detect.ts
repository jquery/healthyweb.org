import type { APIContext } from 'astro'

interface RespondWithProps {
  message?: string
  url?: string
  version?: string
}

export async function POST({ locals, request, redirect }: APIContext) {
  let url
  const contentType = request.headers.get('Content-Type')
  if (contentType === 'application/json') {
    const data: { url: string } = await request.json()
    url = data.url
  } else if (contentType === 'application/x-www-form-urlencoded') {
    const data = await request.formData()
    url = data.get('url')
  }

  /**
   * Support both JSON and HTML requests
   */
  function respondWith(
    status: number,
    { message, url, version }: RespondWithProps
  ) {
    if (request.headers.get('Accept') === 'application/json') {
      return new Response(
        JSON.stringify({ message, url, version: version || null }),
        {
          status,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    }

    const params = new URLSearchParams({
      message: message || '',
      url: url || '',
      version: version || 'null'
    })

    return redirect(
      `/?${params}`,
      // Use a 303 to change to a GET request
      303
    )
  }

  if (typeof url !== 'string' || !url) {
    console.log('No URL provided')
    return respondWith(400, {
      message: 'No URL provided. Please enter a URL and try again.'
    })
  }

  const { env } = locals.runtime

  let response
  try {
    // To test locally, switch this to a regular fetch to
    // the worker running on localhost.
    response = await env.HEALTHYWEB_WORKER.fetch('https://healthyweb.org', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return respondWith(500, {
      message: 'Error detecting version. Please try again later.'
    })
  }

  if (!response.ok) {
    console.error(response)
    return respondWith(response.status || 500, {
      message: 'Error detecting version. Please try again later.'
    })
  }

  const data: RespondWithProps = await response.json()
  const version = data.version

  console.log(
    version
      ? `Detected version ${version} for ${url}`
      : `No version detected for ${url}`
  )

  return respondWith(200, data)
}
