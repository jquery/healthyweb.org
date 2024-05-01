// import getVersion from '../../utils/getVersion'
// import normalizeUrl from '../../utils/normalizeUrl'

import type { APIContext } from 'astro'

interface RespondWithProps {
  message?: string
  url?: string
  version?: string
}

export async function POST({ locals, request, redirect }: APIContext) {
  const { BROWSER } = locals.runtime.env

  console.log(BROWSER)
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

  // let normalizedUrl: URL
  // try {
  //   normalizedUrl = normalizeUrl(url)
  // } catch {
  //   console.log(`Invalid URL ${url}`)
  //   return respondWith(400, {
  //     message: 'Invalid URL. Please check the URL and try again.',
  //     url
  //   })
  // }

  // let version
  // try {
  //   version = await getVersion(normalizedUrl)
  // } catch (error) {
  //   const message = ((error as Error)?.message || '').toLowerCase()

  //   // Better message for URL not found
  //   if (message.includes('not_resolved')) {
  //     console.log(`404: Not Found for ${url}`)
  //     return respondWith(404, {
  //       message: '404: Not Found. Please check the URL.',
  //       url
  //     })
  //   }

  //   if (message.includes('timed out') || message.includes('timeout')) {
  //     console.log(`Timeout loading ${url}`)
  //     return respondWith(200, {
  //       message: 'Timed out waiting for page to load. Please try again.'
  //     })
  //   }

  //   console.log(`Error loading ${url}`)
  //   console.error(error)

  //   return respondWith(500, {
  //     message: 'Error detecting version. Please try again later.'
  //   })
  // }
  const version = '3.7.0'

  console.log(
    version
      ? `Detected version ${version} for ${url}`
      : `No version detected for ${url}`
  )

  return respondWith(200, { url, version })
}
