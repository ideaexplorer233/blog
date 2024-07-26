import { z, defineCollection } from "astro:content";

export const collections = {
  zh: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      pubDate: z.date(),
      updDate: z.date(),
    }),
  }),
  en: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      pubDate: z.date(),
      updDate: z.date(),
    }),
  }),
  author: defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      description: z.string(),
    }),
  })
};
