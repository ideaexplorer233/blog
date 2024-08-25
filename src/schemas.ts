import { z, defineCollection } from "astro:content";

// TODO: Add default values
export const postSchema = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()).optional(),
        description: z.string().optional(),
        thumbnail: z
            .object({
                url: z.string().url(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()).optional(),
        pubDate: z.date(),
        modDate: z.date().optional(),
        options: z
            .object({
                draft: z.boolean(),
            })
            .optional(),
    }),
});

export type Metadata = {
    title?: string;
    description?: string;
    thumbnail?: string;
    alt?: string;
    author?: string;
    language?: string;
};
