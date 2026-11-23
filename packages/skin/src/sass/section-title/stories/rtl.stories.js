export default { title: "Skin/Section Title/RTL" };

export const heading = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
    </div>
</div>
`;

export const subheading = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
    </div>
</div>
`;

export const linked = () => `
<div dir="rtl">
    <div class="section-title section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;

export const linkedWithSubheading = () => `
<div dir="rtl">
    <div class="section-title section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;

export const overflow = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
        </div>
        <div class="section-title__overflow">
            <span class="menu-button">
                <button class="icon-button" type="button" aria-expanded="true" aria-haspopup="menu" aria-label="More options" id="section-title-rtl-1-trigger" aria-controls="section-title-rtl-1-content">
                    <svg class="icon icon--24" width="24" height="24" aria-hidden="true">
                        <use href="#icon-overflow-vertical-24"></use>
                    </svg>
                </button>
                <div class="menu-button__dropdown menu-button__dropdown--reverse">
                    <div class="action-menu" role="menu" id="section-title-rtl-1-content" aria-labelledby="section-title-rtl-1-trigger">
                        <div class="action-menu__item" role="menuitem"><span>Item 1</span></div>
                        <div class="action-menu__item" role="menuitem"><span>Item 2</span></div>
                        <div class="action-menu__item" role="menuitem"><span>Item 3</span></div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</div>
`;

export const withFavorite = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <div class="section-title__info">
            <button class="icon-button infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--16" width="16" height="14">
                    <use href="#icon-heart-16"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;

export const withFavoriteAndLink = () => `
<div dir="rtl">
    <div class="section-title">
        <div class="section-title__title-container">
            <h2 class="section-title__title">Marketing Type Content Title</h2>
            <span class="section-title__subtitle">Recommended for you</span>
        </div>
        <div class="section-title__info">
            <button class="icon-button infotip__host" type="button" aria-expanded="false" aria-label="Help">
                <svg aria-hidden="true" class="icon icon--16" width="16" height="14">
                    <use href="#icon-heart-16"></use>
                </svg>
            </button>
        </div>
        <a class="section-title__cta" href="https://www.ebay.com">See all</a>
    </div>
</div>
`;
