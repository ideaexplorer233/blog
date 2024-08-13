import translation from "./translation.json";

// FIXME: Don't use hard coded default locale
const defaultLocale = "en";

type translate = {
    [key: string]:
        | {
              [key: string]: string | undefined;
          }
        | undefined;
};

const typedTranslation: translate = translation;

function getTranslation(locale: string, key: string) {
    return (
        typedTranslation[locale]?.[key] ??
        typedTranslation[defaultLocale]?.[key] ??
        "!Error: Failed to find translation!"
    );
}

export function createTranslation(locale: string | undefined) {
    return (key: string) => getTranslation(locale || defaultLocale, key);
}
