import { getCollection } from 'astro:content'

// Posts for a language, newest first. On /en/ a post without English translation falls back to Spanish.
export const getPosts = async lang => {
  const spanish = (await getCollection('blog')).sort((a, b) => b.data.date - a.data.date)
  if (lang === 'es') return spanish.map(post => ({ post, lang: 'es' }))
  const english = new Map((await getCollection('blogEn')).map(post => [post.data.slug, post]))
  return spanish.map(post =>
    english.has(post.data.slug) ? { post: english.get(post.data.slug), lang: 'en' } : { post, lang: 'es' }
  )
}

export const hasTranslation = async (lang, slug) => {
  const collection = lang === 'en' ? 'blogEn' : 'blog'
  return (await getCollection(collection)).some(post => post.data.slug === slug)
}
