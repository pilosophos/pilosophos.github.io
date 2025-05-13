// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const writing = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/writing',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  })
});

const art = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/art',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      date: z.optional(z.date()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { writing, art };