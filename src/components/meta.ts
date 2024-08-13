// noinspection SpellCheckingInspection

/*
 * Data from:
 * https://developers.facebook.com/docs/javascript/internationalization
 * https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales
 * https://www.w3.org/International/questions/qa-choosing-language-tags
 */

const tags: any = {
    en: "en_US", // IANA don't have a UK variation
    "zh-Hans-CN": "zh_CN",
    "zh-Hans-HK": "zh_HK",
    "zh-Hans-TW": "zh_TW",
    "zh-Hant-CN": "zh_CN",
    "zh-Hant-HK": "zh_HK",
    "zh-Hant-TW": "zh_TW",
    // Add more if necessary
};

export function getMetaLangTag(tag?: string): string {
    // Translate IANA language tags to Meta specification
    return tag ? tags[tag] : "en_US";
}
