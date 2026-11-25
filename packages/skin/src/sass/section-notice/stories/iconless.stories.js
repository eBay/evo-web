export default { title: "Skin/Section Notice/Iconless" };

export const body = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;

export const title = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;

// known issue: https://github.com/eBay/skin/issues/2146
export const linkCTA = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
        <a href="https://www.ebay.com">Action</a>
    </div>
</section>
`;

// known issue: https://github.com/eBay/skin/issues/2146
export const fakeLinkCTA = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
        <button class="link-button" type="button">Action</button>
    </div>
</section>
`;

export const dismiss = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="section-notice__footer">
    <button aria-label="Close notice" class="link-button section-notice__dismiss">
        <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
            <use href="#icon-close-16"></use>
        </svg>
    </button>
    </div>
</section>
`;

export const dismissAndLinkCTA = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="link-button section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</section>
`;

export const dismissAndFakeLinkCTA = () => `
<section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
    <div class="section-notice__main">
        <h3 class="section-notice__title">Notification Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <p class="section-notice__cta">
        <button class="link-button" type="button">Action</button>
    </p>
    <div class="section-notice__footer">
        <button aria-label="Close notice" class="link-button section-notice__dismiss">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
</section>
`;

// known issue: https://github.com/eBay/skin/issues/2142
export const RTL = () => `
<div dir="rtl">
    <section class="section-notice" role="region" aria-label="Notice" aria-roledescription="Notice">
        <div class="section-notice__main">
            <h3 class="section-notice__title">Notification Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p class="section-notice__cta"><a href="https://www.ebay.com">Action</a></p>
        <div class="section-notice__footer">
            <button aria-label="Close notice" class="link-button section-notice__dismiss">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
    </section>
</div>
`;
