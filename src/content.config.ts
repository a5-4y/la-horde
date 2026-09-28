import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bureau = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bureau' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    photo: z.string().optional(),
  }),
});

const machines = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/machines' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    order: z.number(),
    count: z.number().default(1),
    photo: z.string(),
    photoAlt: z.string(),
  }),
});

export const collections = { bureau, machines };
