import rss, { rssSchema } from "@astrojs/rss";
import { z, getCollection } from "astro:content";
import { createTranslation } from "../i18n/utils";
import type { APIContext } from "astro";
import sanitizeHtml from "sanitize-html";
import { markdown } from "@astropub/md";

const en = createTranslation("en");
const zh = createTranslation("zh");

export async function GET(context: APIContext) {
    const posts = await getCollection("posts");
    let items: z.infer<typeof rssSchema>[] = [];
    for (let post of posts) {
        items.push({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            categories: post.data.tags,
            link: `/${post.slug}/`,
            content: sanitizeHtml(await markdown(posts[0].body)),
        });
    }
    return rss({
        title: `${en("base.site.name")}|${zh("base.site.name")}`,
        description: `${en("base.site.description")}|${zh("base.site.description")}`,
        site: context.site!,
        items: items,
    });
}
