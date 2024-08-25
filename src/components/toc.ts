class ToC {
    // https://github.com/withastro/starlight/blob/main/packages/starlight/components/TableOfContents/starlight-toc.ts#L80
    // I HATE IntersectionObserver, it took me 16 hours to finish this!

    constructor() {
        this.observer = new IntersectionObserver(this.observeHandler);
        this.setObeserver();

        // Stop observer on window resizing
        window.addEventListener("resize", () => {
            if (this.observer) this.observer.disconnect();
            clearTimeout(this.timeoutID);
            this.timeoutID = setTimeout(
                () => this.onIdle(this.setObeserver),
                200,
            );
        });
    }

    // I don't know why there's an nodejs type
    // but it just works...
    timeoutID: NodeJS.Timeout | undefined;

    observer: IntersectionObserver;

    toObserve = document.querySelectorAll("h2, h3, h4, h5, h6");

    toc = [
        ...(<NodeListOf<HTMLAnchorElement>>(
            document.querySelectorAll("aside ul li a")
        )),
    ];

    setObeserver = () => {
        this.toObserve.forEach((e) => this.observer.observe(e));
    };

    onIdle(callback: IdleRequestCallback) {
        if (window.requestIdleCallback) {
            return window.requestIdleCallback(callback);
        } else {
            return setTimeout(callback, 1);
        }
    }

    // The highest link in the viewport
    toplink: HTMLAnchorElement | undefined;

    // This function have to be an arrow function
    // Or it's `this` binding with this class will lost.
    observeHandler = (entries: IntersectionObserverEntry[]) => {
        for (const { isIntersecting, target } of entries) {
            if (isIntersecting) {
                this.getLink(encodeURIComponent(target.id))?.setAttribute(
                    "data-inview",
                    "true",
                );
            } else {
                this.getLink(encodeURIComponent(target.id))?.removeAttribute(
                    "data-inview",
                );
            }
        }

        // Make sure there's always only one link is highlighting.
        this.getLinkByAttr("aria-current")?.removeAttribute("aria-current");
        const firstElem = this.getLinkByAttr("data-inview");
        console.log(firstElem);
        firstElem?.setAttribute("aria-current", "true");
        // firstElem?.parentElement?.scrollIntoView();

        // targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // P.S. These methods' performance is a little bit higher than querySelectorAll
    //      So use them if possible
    getLink(id: string) {
        return this.toc.find((e) => e.hash === `#${id}`);
    }

    getLinkByAttr(name: string) {
        // Find the first link with the given attribute name
        for (let e of this.toc) {
            if (e.attributes.getNamedItem(name)) {
                return e;
            }
        }
    }
}

new ToC();
