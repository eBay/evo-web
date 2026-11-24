export default { title: "Skin/Menu Button/Menus" };

const chevron = `
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>`;

const tick = `
                <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>`;

const buttonTrigger = (id, text, haspopup) => `
    <button class="button" type="button" id="${id}-trigger" aria-expanded="true"${haspopup ? ' aria-haspopup="menu"' : ""} aria-controls="${id}-content">
        <span class="button__cell">
            <span class="button__text">${text}</span>${chevron}
        </span>
    </button>`;

const actionItem = (text, attrs = "", focus = false) => `
            <div class="action-menu__item" role="menuitem" tabindex="${focus ? 0 : -1}"${attrs}>
                <span>${text}</span>
            </div>`;

const checkItem = (role, text, checked, attrs = "") => `
            <div class="action-menu__item" role="${role}" aria-checked="${checked}" tabindex="-1"${attrs}>
                <span>${text}</span>${tick}
            </div>`;

const filterItem = (role, text, checked, attrs = "", focus = false) => {
    const kind = role === "menuitemradio" ? "radio" : "checkbox";
    return `
                <div class="filter-menu__item" role="${role}" aria-checked="${checked}" tabindex="${focus ? 0 : -1}"${attrs}>
                    <span class="filter-menu__${kind}">
                        <svg class="icon icon--18 icon--unchecked" height="18" width="18" aria-hidden="true">
                            <use href="#icon-${kind}-unchecked-18"></use>
                        </svg>
                        <svg class="icon icon--18 icon--checked" height="18" width="18" aria-hidden="true">
                            <use href="#icon-${kind}-checked-18"></use>
                        </svg>
                    </span>
                    <span class="filter-menu__text">${text}</span>
                </div>`;
};

const chipTrigger = (id, text, selected) => `
    <button class="filter-chip${selected ? " filter-chip--selected" : ""}" type="button" id="${id}-trigger" aria-expanded="true" aria-haspopup="menu" aria-controls="${id}-content">
        <span class="filter-chip__text">${text}</span>
        <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>${selected ? '\n        <span class="clipped">Filter Applied</span>' : ""}
    </button>`;

export const actionMenu = () => `
<span class="menu-button">${buttonTrigger("menu-button-action", "Actions", true)}
    <div class="menu-button__dropdown">
        <div class="action-menu" role="menu" id="menu-button-action-content" aria-labelledby="menu-button-action-trigger">${actionItem("Edit", ' aria-disabled="true"')}${actionItem("Duplicate", "", true)}${actionItem("Share")}
            <hr class="action-menu__separator" role="separator" />${checkItem("menuitemcheckbox", "Show sold items", "true")}${checkItem("menuitemcheckbox", "Show ended items", "false")}
            <hr class="action-menu__separator" role="separator" />${checkItem("menuitemradio", "Best match", "true")}${checkItem("menuitemradio", "Newly listed", "false")}
        </div>
    </div>
</span>
`;

export const actionMenuIconButton = () => `
<span class="menu-button">
    <button class="icon-button" type="button" id="menu-button-action-icon-trigger" aria-label="More actions" aria-expanded="true" aria-haspopup="menu" aria-controls="menu-button-action-icon-content">
        <svg class="icon icon--24" aria-hidden="true" width="16" height="16">
            <use href="#icon-overflow-vertical-24"></use>
        </svg>
    </button>
    <div class="menu-button__dropdown">
        <div class="action-menu" role="menu" id="menu-button-action-icon-content" aria-labelledby="menu-button-action-icon-trigger">${actionItem("Edit", "", true)}${actionItem("Duplicate")}${actionItem("Share")}
        </div>
    </div>
</span>
`;

export const filterMenuSingle = () => `
<span class="menu-button">${chipTrigger("menu-button-filter-single", "Condition", true)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-single-content" aria-labelledby="menu-button-filter-single-trigger">${filterItem("menuitemradio", "Any condition", "false", ' aria-disabled="true"')}${filterItem("menuitemradio", "New", "true", "", true)}${filterItem("menuitemradio", "Used", "false")}
            </div>
        </span>
    </div>
</span>
`;

export const filterMenuMultiple = () => `
<span class="menu-button">${chipTrigger("menu-button-filter-multi", "Color", true)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-multi-content" aria-labelledby="menu-button-filter-multi-trigger">${filterItem("menuitemcheckbox", "Black", "false", ' aria-disabled="true"')}${filterItem("menuitemcheckbox", "Blue", "true", "", true)}${filterItem("menuitemcheckbox", "Red with a long label that wraps to another line", "true")}
            </div>
            <button type="button" class="filter-menu__footer">Apply</button>
        </span>
    </div>
</span>
`;

export const filterMenuUnselected = () => `
<span class="menu-button">${chipTrigger("menu-button-filter-none", "Brand", false)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-none-content" aria-labelledby="menu-button-filter-none-trigger">${filterItem("menuitemcheckbox", "Apple", "false", "", true)}${filterItem("menuitemcheckbox", "Samsung", "false")}${filterItem("menuitemcheckbox", "Google", "false")}
            </div>
        </span>
    </div>
</span>
`;

export const navigationMenu = () => `
<span class="menu-button">${buttonTrigger("menu-button-nav", "My eBay", false)}
    <div class="menu-button__dropdown">
        <div class="navigation-menu">
            <ul class="navigation-menu__items" id="menu-button-nav-content">
                <li><a class="navigation-menu__item">Summary</a></li>
                <li>
                    <a href="https://www.ebay.com" class="navigation-menu__item" aria-current="page">
                        <span>Purchases</span>
                        <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </a>
                </li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                <li><button type="button" class="navigation-menu__item"><span>Sign out</span></button></li>
            </ul>
        </div>
    </div>
</span>
`;
