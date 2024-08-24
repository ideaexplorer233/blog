import { defineConfig } from "astro/config";

// astro intergrations
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// rehype plugins
import rehypeExternalLinks from "rehype-external-links";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// shiki transformers
import { transformerTwoslash } from "@shikijs/twoslash";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind(),
        sitemap({
            i18n: {
                defaultLocale: "zh",
                locales: {
                    en: "en",
                    zh: "zh-Hans-CN",
                },
            },
        }),
        icon({}),
    ],
    i18n: {
        defaultLocale: "zh",
        routing: {
            prefixDefaultLocale: true,
        },
        locales: [
            "zh",
            "en",
            /*
    {
        path: "zh",
        codes: [
            "zh",
            "zh-Hans",
            "zh-Hans-CN",
            "zh-Hans-HK",
            "zh-Hans-TW",
            "zh-Hans-SG",
            "zh-Hans-MO",
            "zh-Hant",
            "zh-Hant-CN",
            "zh-Hant-HK",
            "zh-Hant-TW",
            "zh-Hant-SG",
            "zh-Hant-MO",
        ],
    }*/
        ],
    },
    markdown: {
        rehypePlugins: [
            rehypeHeadingIds,
            [
                rehypeExternalLinks,
                {
                    content: { type: "text", value: "↗" },
                    contentProperties: { style: "display: inline-block" },
                    // https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
                    rel: [],
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    behaviour: "prepend",
                    properties: { class: "not-prose" },
                    content: { type: "text", value: "#" },
                },
            ],
        ],
        shikiConfig: {
            // wrap: true,
            theme: "github-dark",
            transformers: [
                transformerTwoslash(),
                transformerNotationDiff(),
                transformerNotationHighlight(),
            ],
        },
    },
});
