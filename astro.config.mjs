import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  site: 'https://manuelperez.dev',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Michroma',
      cssVariable: '--font-michroma',
      fallbacks: ['sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Exo 2',
      cssVariable: '--font-exo',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Share Tech Mono',
      cssVariable: '--font-share-tech-mono',
      fallbacks: ['monospace']
    }
  ]
})
