import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { transformerTwoslash } from "@shikijs/twoslash";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
} from "@shikijs/transformers";

import sitemap from "@astrojs/sitemap";

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
