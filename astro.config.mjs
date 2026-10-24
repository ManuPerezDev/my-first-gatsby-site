import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import flowbiteReact from 'flowbite-react/plugin/astro'

export default defineConfig({
  site: 'https://manuelperez.dev',
  integrations: [react(), flowbiteReact()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: 'prism'
  }
})
