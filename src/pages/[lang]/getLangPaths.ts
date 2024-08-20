export default function () {
    return function getLangPaths() {
        return [{ params: { lang: "en" } }, { params: { lang: "zh" } }];
    };
}
