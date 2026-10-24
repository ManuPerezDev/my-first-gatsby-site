import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://manuelperez.dev',
  integrations: [react()],
  markdown: {
    syntaxHighlight: 'prism'
  }
})
