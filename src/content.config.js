import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Each post lives in blog/<folder>/: index.md is the Spanish original and index.en.md its English translation.
// Both share the slug, so /blog/<slug> and /en/blog/<slug> point to each other.
const schema = ({ image }) =>
  z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    slug: z.string(),
    hero_image: image(),
    hero_image_alt: z.string(),
    hero_image_owner_url: z.url().optional()
  })

const blog = defineCollection({ loader: glob({ pattern: '*/index.md', base: './blog' }), schema })
const blogEn = defineCollection({ loader: glob({ pattern: '*/index.en.md', base: './blog' }), schema })

export const collections = { blog, blogEn }
