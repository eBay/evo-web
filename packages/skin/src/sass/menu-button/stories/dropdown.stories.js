export default { title: "Skin/Menu Button/Dropdown" };

const links = (id) => `
    <div class="menu-button__dropdown" id="${id}">
        <div class="navigation-menu">
            <ul class="navigation-menu__items">
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Purchases</a></li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Saved searches</a></li>
            </ul>
        </div>
    </div>`;

const buttonTrigger = (id, expanded, extra = "") => `
    <button class="button" type="button" id="${id}-trigger" aria-expanded="${expanded}" aria-controls="${id}"${extra}>
        <span class="button__cell">
            <span class="button__text">My eBay</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>`;

export const collapsed = () => `
<span class="menu-button">${buttonTrigger("menu-button-collapsed", "false")}${links("menu-button-collapsed")}
</span>
`;

export const expanded = () => `
<span class="menu-button">${buttonTrigger("menu-button-expanded", "true")}${links("menu-button-expanded")}
</span>
`;

export const disabled = () => `
<span class="menu-button">${buttonTrigger("menu-button-disabled", "false", " disabled")}${links("menu-button-disabled")}
</span>
`;

export const iconButtonTrigger = () => `
<span class="menu-button">
    <button class="icon-button" type="button" id="menu-button-icon-trigger" aria-label="My eBay" aria-expanded="true" aria-controls="menu-button-icon">
        <svg class="icon icon--24" aria-hidden="true" width="16" height="16">
            <use href="#icon-profile-24"></use>
        </svg>
    </button>${links("menu-button-icon")}
</span>
`;

export const reverse = () => `
<div style="display: flex; justify-content: flex-end;">
    <span class="menu-button">${buttonTrigger("menu-button-reverse", "true")}
        <div class="menu-button__dropdown menu-button__dropdown--reverse" id="menu-button-reverse">
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
