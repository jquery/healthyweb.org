import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const localPlugin = plugin(function ({ addBase }) {
  addBase({
    html: {
      color: '#fff',
      'background-color': '#001344',
      height: '100%',
      'overflow-y': 'auto',
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased'
    },
    body: {
      height: '100%',
      'min-height': ['100vh', '100dvh']
    }
  })
})

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url(/bg.webp)'
      },
      boxShadow: {
        inset: 'inset 0 0 0.5rem 1px rgb(0 0 0 / 0.25)'
      },
      colors: {
        background: {
          DEFAULT: '#001344',
          light: '#002C65'
        },
        primary: {
          DEFAULT: '#80BD42',
          hover: '#7AB13A',
          active: '#6C9C34'
        },
        white: {
          DEFAULT: '#FFFFFF',
          hover: '#E5E5E5',
          active: '#CCCCCC'
        },
        error: {
          DEFAULT: '#ED1D2B'
        },
        success: {
          DEFAULT: '#00B836'
        }
      },
      dropShadow: {
        ...defaultTheme.dropShadow,
        md: '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: [
          // Set separately by the app router and pages router
          'Roboto Slab',
          ...defaultTheme.fontFamily.sans
        ]
      },
      height: {
        input: '50px'
      }
    }
  },
  plugins: [localPlugin]
}
