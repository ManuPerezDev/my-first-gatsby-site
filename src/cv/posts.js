// Blog posts for the CV, read straight from blog/ so the CV also builds outside Astro (scripts/cv-private.mjs).
// Uses the English translation when it exists and falls back to the Spanish original.
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { profile } from '../data/profile.js'
import { postPath } from '../i18n.js'

const frontmatter = file => {
  const block = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
  return Object.fromEntries([...block.matchAll(/^(\w+):\s*"?(.*?)"?\s*$/gm)].map(([, key, value]) => [key, value]))
}

export const cvPosts = lang => {
  const blogDir = join(process.cwd(), 'blog')
  return readdirSync(blogDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const translated = join(blogDir, entry.name, `index.${lang}.md`)
      const useTranslation = lang !== 'es' && existsSync(translated)
      const data = frontmatter(useTranslation ? translated : join(blogDir, entry.name, 'index.md'))
      const postLang = useTranslation ? lang : 'es'
      return {
        title: data.title,
        year: data.date.slice(0, 4),
        url: `${profile.links.website}${postPath(postLang, data.slug)}`
      }
    })
    .sort((a, b) => b.year.localeCompare(a.year) || a.title.localeCompare(b.title))
}
