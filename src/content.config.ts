// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const writing = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/writing',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    published: z.optional(z.date()),
    updated: z.optional(z.date()),
    cover: z.optional(image()),
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
      sticker: z.optional(z.boolean()),
      print: z.optional(z.boolean()),
      tags: z.optional(z.array(z.string())),
    }),
});

const comic = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/comic',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      date: z.date(),
      mouseover: z.optional(z.string())
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { writing, art, comic };