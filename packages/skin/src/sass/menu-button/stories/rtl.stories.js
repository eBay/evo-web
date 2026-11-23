export default { title: "Skin/Menu Button/RTL" };

export const rtl = () => `
<div dir="rtl">
    <span class="menu-button">
        <button class="button" type="button" id="menu-button-rtl-trigger" aria-expanded="true" aria-controls="menu-button-rtl">
            <span class="button__cell">
                <span class="button__text">My eBay</span>
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__dropdown" id="menu-button-rtl">
            <div class="navigation-menu">
                <ul class="navigation-menu__items">
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Purchases</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Saved searches</a></li>
                </ul>
            </div>
        </div>
    </span>
</div>
`;

export const rtlReverse = () => `
<div dir="rtl" style="display: flex; justify-content: flex-end;">
    <span class="menu-button">
        <button class="button" type="button" id="menu-button-rtl-reverse-trigger" aria-expanded="true" aria-controls="menu-button-rtl-reverse">
            <span class="button__cell">
                <span class="button__text">My eBay</span>
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </span>
        </button>
        <div class="menu-button__dropdown menu-button__dropdown--reverse" id="menu-button-rtl-reverse">
            <div class="navigation-menu">
                <ul class="navigation-menu__items">
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Purchases</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Saved searches</a></li>
                </ul>
            </div>
        </div>
    </span>
</div>
`;
