import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    slug: z.string(),
    hero_image: image(),
    hero_image_alt: z.string(),
    hero_image_owner_url: z.url().optional()
  })
})

export const collections = { blog }
